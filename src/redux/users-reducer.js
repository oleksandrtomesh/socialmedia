const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET-USERS';
const SELECT_PAGE = 'SELECT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

//wstanowluju initialState kotryj bude peredano jak poczatowe znaczenia state
//do redusera, bo w inszomu wypadku w reducer pryjde znaczenia "undefined" i bude pomylka
let initialState = {
    users:[],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1
};

//w takyj sposib state = initialState wstanowlujetsia znaczenia za zamowczuwaniam
//tobto jakszczo w dialogsReducer ne pryjszow rzoden state, to w state bude peredano
//initialState 
const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOWED:
            //powertajemo odrazu kopiju state, ne stworiujuczy zminoji
            return {
                ...state,
                //map probigajetsia po wsich users w state i nam potribno tilky 
                //zrobyty kopiju kolu id w state == id kotre prychodyt z action
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
        
        //w SET_USERS my kopijujemo nasz state.users i dodajemo do niogo 
        //users kotri pryjdut do nas w state
        case SET_USERS:
            return {...state, users: action.users};

        case SELECT_PAGE:
            return {...state, currentPage: action.currentPage};
        
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        default:
            return state;
            
    }
};
//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл NewMessage

export const followedAC = (userId) => ({type: FOLLOWED, userId})
export const unfollowedAC = (userId) => ({ type: UNFOLLOWED, userId})
export const setUsersAC = (users) => ({ type: SET_USERS, users})
export const selectPageAC = (currentPage) => ({ type: SELECT_PAGE, currentPage})
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount})

export default usersReducer;