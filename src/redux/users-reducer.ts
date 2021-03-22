import usersAPI from "../api/api";
import { PhotosType } from "../types/types";

//Actions

const SET_USERS = 'SET-USERS';
const SELECT_PAGE = 'SELECT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_FETCHING = 'TOGGLE_IS_FOLLOW_FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';


//Initial State

type UsersType = {
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

const usersReducer = (state = initialState, action: any):initialStateType => {

    switch (action.type) {
        //change following of user
        case TOGGLE_FOLLOWING:
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
        case SET_USERS:
            return {...state, users: action.users};
        
        //set current page of users
        case SELECT_PAGE:
            return {...state, currentPage: action.currentPage};
        
        //set total amount of users
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        case TOGGLE_IS_FETCHING:
            return{...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOW_FETCHING:
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
type SetUsersType = { type: typeof SET_USERS, users: UsersType}
export const setUsers = (users: UsersType):SetUsersType  => ({ type: SET_USERS, users})

type SelectPageType = {type:typeof SELECT_PAGE, currentPage: number}
export const selectPage = (currentPage: number):SelectPageType  => ({ type: SELECT_PAGE, currentPage})

type SetTotalCountType = {type:typeof SET_TOTAL_COUNT, totalCount: number}
export const setTotalCount = (totalCount: number): SetTotalCountType => ({ type: SET_TOTAL_COUNT, totalCount})

type ToggleIsFetchingType = { type:typeof TOGGLE_IS_FETCHING, isFetching:boolean}
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingType  => ({ type: TOGGLE_IS_FETCHING, isFetching})

type ToggleIsFollowFetchingType = { type:typeof TOGGLE_IS_FOLLOW_FETCHING, isFetching: boolean, userId: number}
export const toggleIsFollowFetching = (isFetching: boolean, userId: number): ToggleIsFollowFetchingType => 
    ({ type: TOGGLE_IS_FOLLOW_FETCHING, isFetching, userId})

type ToggleFollowingType = {type:typeof TOGGLE_FOLLOWING, userId: number, userFollowed: boolean}
export const toggleFollowing = (userId:number, userFollowed: boolean):ToggleFollowingType => 
    ({type: TOGGLE_FOLLOWING, userId, userFollowed})

//thunk creators

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    };
};


export const toggleFollowingUser = (userId: number, userFollowed: boolean) => {

    return async (dispatch:any) => {
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