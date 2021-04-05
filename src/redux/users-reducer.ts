import { AppStateType } from './redux-store';
import { ThunkAction } from "redux-thunk";
import usersAPI, { ResultCode } from "../api/api";
import { PhotosType, PropertiesType } from "../types/types";

//Initial State

export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

let initialState = {
    users:[] as Array<UsersType>,
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollow: false,
    followingInProgress: [] as Array<number> // array of users id`s
};

type initialStateType = typeof initialState

//Reducer

const usersReducer = (state = initialState, action: UserReducerActionsTypes):initialStateType => {

    switch (action.type) {
        //change following of user
        case 'app/users-reducer/TOGGLE_FOLLOWING':
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: action.userFollowed }
                    }
                        
                    return u;
                })
            };
        
        //set users for current page
        case 'app/users-reducer/SET-USERS':
            return {...state, users: action.users};
        
        //set current page of users
        case 'app/users-reducer/SELECT-PAGE':
            return {...state, currentPage: action.currentPage};
        
        //set total amount of users
        case 'app/users-reducer/SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount};

        case 'app/users-reducer/TOGGLE_IS_FETCHING':
            return{...state, isFetching: action.isFetching};

        case 'app/users-reducer/TOGGLE_IS_FOLLOW_FETCHING':
            return{...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId] //disable only button of user what we follow/unfollow during server request
                : state.followingInProgress.filter(id => id !== action.userId) //delete user id from array
            }
        default:
            return state;
            
    }
};


//action creators
type UserReducerActionsTypes = ReturnType<PropertiesType<typeof userReducerActionsCreators>>

const userReducerActionsCreators = {
    setUsers: (users: Array<UsersType>)  => ({ type: 'app/users-reducer/SET-USERS', users} as const),
    selectPage: (currentPage: number)  => ({ type: 'app/users-reducer/SELECT-PAGE', currentPage} as const),
    setTotalCount: (totalCount: number) => ({ type: 'app/users-reducer/SET-TOTAL-COUNT', totalCount} as const),
    toggleIsFetching: (isFetching: boolean)  => ({ type: 'app/users-reducer/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleIsFollowFetching: (isFetching: boolean, userId: number) => 
        ({ type: 'app/users-reducer/TOGGLE_IS_FOLLOW_FETCHING', isFetching, userId} as const),
    toggleFollowing: (userId:number, userFollowed: boolean) => 
        ({type: 'app/users-reducer/TOGGLE_FOLLOWING', userId, userFollowed} as const)
}


//thunk creators

type UserReducerThunkType = ThunkAction <void, AppStateType, unknown, UserReducerActionsTypes>

export const getUsers = (currentPage: number, pageSize: number): UserReducerThunkType => {
    return async (dispatch) => {
        dispatch(userReducerActionsCreators.toggleIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(userReducerActionsCreators.toggleIsFetching(false));
        dispatch(userReducerActionsCreators.setUsers(data.items));
        dispatch(userReducerActionsCreators.setTotalCount(data.totalCount));
    };
};

export const handlePageChange = (pageNumber:number, pageSize: number): UserReducerThunkType => async (dispatch) =>
{
    dispatch(userReducerActionsCreators.selectPage(pageNumber));
    dispatch(userReducerActionsCreators.toggleIsFetching(true));
    //getUsers function what get users from server
    const data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(userReducerActionsCreators.toggleIsFetching(false));
    dispatch(userReducerActionsCreators.setUsers(data.items));    
}


export const toggleFollowingUser = (userId: number, userFollowed: boolean): UserReducerThunkType => {

    return async (dispatch) => {
        dispatch(userReducerActionsCreators.toggleIsFollowFetching(true, userId));
        if (userFollowed === false){
            let data = await usersAPI.followUser(userId);
            if (data.resultCode === ResultCode.success) {
                dispatch(userReducerActionsCreators.toggleFollowing(userId, true));
            }
        };
        if (userFollowed === true){
            let data = await usersAPI.unfollowUser(userId);
            if (data.resultCode === ResultCode.success) {
                dispatch(userReducerActionsCreators.toggleFollowing(userId, false));
            }
        };
        
        dispatch(userReducerActionsCreators.toggleIsFollowFetching(false, userId));
    }

}

export default usersReducer;