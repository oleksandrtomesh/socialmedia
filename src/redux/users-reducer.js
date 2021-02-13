import usersAPI from "../api/api";

const SET_USERS = 'SET-USERS';
const SELECT_PAGE = 'SELECT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_FETCHING = 'TOGGLE_IS_FOLLOW_FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';


//wstanowluju initialState kotryj bude peredano jak poczatowe znaczenia state
//do redusera, bo w inszomu wypadku w reducer pryjde znaczenia "undefined" i bude pomylka
let initialState = {
    users:[],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollow: false,
    isFollowFetching: []
};

//w takyj sposib state = initialState wstanowlujetsia znaczenia za zamowczuwaniam
//tobto jakszczo w dialogsReducer ne pryjszow rzoden state, to w state bude peredano
//initialState 
const usersReducer = (state = initialState, action) => {

    // dispatch(action) action - tse oject kotryj obowjazkowo maje 
    //wlastywist type
    switch (action.type) {

        case TOGGLE_FOLLOWING:
            return {
                ...state,
                //map probigajetsia po wsich users w state i nam potribno tilky 
                //zrobyty kopiju koly id w state == id kotre prychodyt z action
                //i ciomu useru pominiaty followed na true
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: action.userFollowed }
                    }
                        
                    return u;
                })
            };
        
        //w SET_USERS my kopijujemo nasz state.users i wstawlajemo w niogo 
        //users kotri pryjdut do nas w state
        case SET_USERS:
            return {...state, users: action.users};
        
        //selct_page wstanowluje w state nomer storinky na kotru narzaw korystuwacz
        case SELECT_PAGE:
            return {...state, currentPage: action.currentPage};
        
        //set_total_coun za dopomoguju dispatch prynosyt cilkowyte znaczenia korystuwacziw z servera
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        //toggleIsFetching perekluczaje isFetching w state, true - tse koly ide zagruzka danych z servera
        //false tse koly dani zarrzeni i ne potribno pokazuwaty kartynku zagruzky
        case TOGGLE_IS_FETCHING:
            return{...state, isFetching: action.isFetching};

        //TOGGLE_IS_FOLLOW_FETCHING perekluczaje isFollowFetching w state na true czy false
        //w zalenosti czy ide zapyt na serwer. True - todi knopka bude zadizajblena
        //false, knopka dostupna, szczob na nei natysnuty
        case TOGGLE_IS_FOLLOW_FETCHING:
            //w returni robymo kopiju state
            return{...state, 
                isFollowFetching: action.isFetching 
                //jakszczo dispatch w action creator powertaje true
                //dodajemo do masywu isFollowFetching w state nomer id korystuwacza kotrogo followym czy unfollowym
                ? [...state.isFollowFetching, action.userId] 
                //jakszczo false to za dopomogoju filter powertajemo nowyj masyw w kotromu we ne bude
                //id korystuwacziw kotri we po zapyti na server i tym samym knopka foloow/unfollow na tych 
                //korystuwaczach nie bude disabled
                : state.isFollowFetching.filter(id => id !== action.userId)
            }
        default:
            return state;
            
    }
};
//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл NewMessage

//action creators
export const setUsers = (users) => ({ type: SET_USERS, users})
export const selectPage = (currentPage) => ({ type: SELECT_PAGE, currentPage})
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowFetching = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOW_FETCHING, isFetching, userId})

export const toggleFollowing = (userId, userFollowed) => ({type: TOGGLE_FOLLOWING, userId, userFollowed})

//thunk creators

//thunks kreator tse funkcija, jaka za dopomogoju zamykania peredaje w thunk neobhidni parametry
export const getUsers = (currentPage, pageSize) => {
    //thunk - tse funkcija, kotra prujmaje w sebe dispatch i w seredyni dispatczyt action creatory
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        if (data.totalCount < 100) {
            dispatch(setTotalCount(data.totalCount));
        } else {
            dispatch(setTotalCount(100));
        }
    }
};


export const toggleFollowingUser = (userId, userFollowed) => {

    return async (dispatch) => {
        dispatch(toggleIsFollowFetching(true, userId));
        if (userFollowed === false){
            let data = await usersAPI.followUser(userId);
            if (data.resultCode === 0) {
                dispatch(toggleFollowing(userId, true));
            }
        };
        if (userFollowed === true){
            let data = await usersAPI.unfollowUser(userId);
            if (data.resultCode === 0) {
                dispatch(toggleFollowing(userId, false));
            }
        };
        
        dispatch(toggleIsFollowFetching(false, userId));
    }

}

export default usersReducer;