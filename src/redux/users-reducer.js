const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET-USERS';
const SELECT_PAGE = 'SELECT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

//wstanowluju initialState kotryj bude peredano jak poczatowe znaczenia state
//do redusera, bo w inszomu wypadku w reducer pryjde znaczenia "undefined" i bude pomylka
let initialState = {
    users:[],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

//w takyj sposib state = initialState wstanowlujetsia znaczenia za zamowczuwaniam
//tobto jakszczo w dialogsReducer ne pryjszow rzoden state, to w state bude peredano
//initialState 
const usersReducer = (state = initialState, action) => {

    // dispatch(action) action - tse oject kotryj obowjazkowo maje 
    //wlastywist type
    switch (action.type) {

        case FOLLOWED:
            //powertajemo odrazu kopiju state, ne stworiujuczy zminoji
            return {
                ...state,
                //map probigajetsia po wsich users w state i nam potribno tilky 
                //zrobyty kopiju koly id w state == id kotre prychodyt z action
                //i ciomu useru pominiaty followed na true
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: true};
                    }
                    return u;
                })
            };

        case UNFOLLOWED:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: false};
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

        default:
            return state;
            
    }
};
//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл NewMessage

export const follow = (userId) => ({type: FOLLOWED, userId})
export const unfollow = (userId) => ({ type: UNFOLLOWED, userId})
export const setUsers = (users) => ({ type: SET_USERS, users})
export const selectPage = (currentPage) => ({ type: SELECT_PAGE, currentPage})
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;