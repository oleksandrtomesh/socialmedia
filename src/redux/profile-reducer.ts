import { profileAPI } from '../api/api';
import { UserProfileType, PhotosType } from '../types/types';
import { saveAuthUserPhotoSuccess } from './auth-reducer';


//actions
const ADD_POST = 'app/profile-reducer/ADD-POST';
const UPDATE_TEXT_AREA ='app/profile-reducer/UPDATE-TEXT-AREA';
const SET_USER_PROFILE ='app/profile-reducer/SET_USER_PROFILE';
const SET_USER_STATUS = 'app/profile-reducer/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'app/profile-reducer/SAVE_PHOTO_SUCCESS';
const IS_FETCHING = 'app/profile-reducer/IS_FETCHING'

//initial State
type PostDataType = {
    id: number
    message: string
    likeCounter: number
}

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are you?", likeCounter: 12},
        {id: 2, message: "It's my firs post", likeCounter: 13},
        {id: 3, message: "It's my second post", likeCounter: 14},
        {id: 4, message: "It's my third post", likeCounter: 15},
        {id: 5, message: "It's my fourth post", likeCounter: 16},
        {id: 6, message: "It's my fifth post", likeCounter: 17}
    ] as Array<PostDataType>,
    newPostText: "" as string,
    userProfile: null as UserProfileType | null,
    userStatus: "" as string | null,
    isFetching: false as boolean
};

type InitialStateType = typeof initialState

//Reducer
const profileReducer = (state = initialState, action: any):InitialStateType  => {

        switch (action.type) {
            case ADD_POST:
                let newPostObj = {
                    id: 5,
                    message: action.newPostText,
                    likeCounter: 0
                };
                
                return {
                    ...state,
                    postData: [newPostObj, ...state.postData],
                    newPostText: ""
                };

            case UPDATE_TEXT_AREA: 

                return {
                    ...state,
                    newPostText: action.newText
                };
            ;

            case SET_USER_PROFILE: 
                return {
                    ...state,
                    userProfile: action.profile
                }
            ;

            case SET_USER_STATUS: {
                return {
                    ...state,
                    userStatus: action.status
                };
            }

            case SAVE_PHOTO_SUCCESS: 
                return {
                    ...state,
                    userProfile: {...state.userProfile, photos: action.photos},
                }
            ;

            case IS_FETCHING: 
                return {
                    ...state,
                    isFetching: action.isFetching
                }

            default:
                return state;
        }
    }

//Action Creators
type AddPostType = {type: typeof ADD_POST, newPostText: string}
export const addPost = (newPostText: string):AddPostType  => ({type: ADD_POST, newPostText});

type UpdateTextAreaActionCreatorType = { type: typeof UPDATE_TEXT_AREA, newText: string }
export const updateTextAreaActionCreator = (text: string):UpdateTextAreaActionCreatorType  => ({ type: UPDATE_TEXT_AREA, newText: text });

type SetProfileType = {type:typeof SET_USER_PROFILE, profile: UserProfileType }
export const setProfile = (profile: UserProfileType):SetProfileType => ({ type: SET_USER_PROFILE, profile });

type setUserStatusType = {type: typeof SET_USER_STATUS, status: string}
export const setUserStatus = (status:string): setUserStatusType => ({type: SET_USER_STATUS, status});

type SavePhotoSuccessType = {type: typeof SAVE_PHOTO_SUCCESS, photos: PhotosType}
export const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessType  => ({type: SAVE_PHOTO_SUCCESS, photos})

type isFetchingType = {type: typeof IS_FETCHING, isFetching: boolean}
export const isFetching = (isFetching: boolean):isFetchingType  => ({type: IS_FETCHING, isFetching})


//side effects, Thinks

export const addNewPost = (newPostText: string) => {
    return (dispatch:any) => dispatch(addPost(newPostText))
};

export const setUserProfile = (userId:number) => async (dispatch: any) => { 
            dispatch(isFetching(true))
            const response = await profileAPI.getUserProfile(userId)
            dispatch(setProfile(response.data));
            dispatch(isFetching(false))
        }

export const setStatus = (userId:number) => {
    return ((dispatch:any) => {
        profileAPI.getUserStatus(userId)
            .then((response: any) => {
                dispatch(setUserStatus(response.data))
                }
            )
        }
    )
};

export const updateStatus = (status: string) => {
    return ((dispatch:any) => {
            profileAPI.updateUserStatus(status)
                .then((response: any) => {
                    if (response.resultCode === 0 ){
                        dispatch(setUserStatus(status))
                    }
                }
            )
        }
    )
}

export const saveUserPhoto = (photo: PhotosType) => async (dispatch:any) => {
    dispatch(isFetching(true))
    const response = await profileAPI.updateUserPhoto(photo)
        if (response.data.resultCode === 0 ){
            dispatch(savePhotoSuccess(response.data.data.photos));
            dispatch(saveAuthUserPhotoSuccess(response.data.data.photos));
        }
    dispatch(isFetching(false))
}

export const saveProfileInfo = (profile: UserProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().authorization.data.id;
    const response = await profileAPI.updateUserProfile(profile)
    if (response.data.resultCode === 0){
        dispatch(setUserProfile(userId))
    } else {
        return response.data.messages;
    }
}

export default profileReducer;