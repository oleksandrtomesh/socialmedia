import { AppStateType } from './../redux-store';


export const getUserProfile = (state: AppStateType) =>
    state.profilePage.userProfile

export const getAuthUserData = (state: AppStateType) =>
    state.authorization.data

export const getUserStatus = (state: AppStateType) =>
    state.profilePage.userStatus

export const getIsProfileFetching = (state: AppStateType) =>
    state.profilePage.isFetching

export const getPostData = (state: AppStateType) =>
    state.profilePage.postData

export const getNewPostText = (state: AppStateType) =>
    state.profilePage.newPostText
