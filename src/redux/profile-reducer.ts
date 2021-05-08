import { InferActionsType, ThunkType } from './../types/types';
import { ResultCode } from '../api/api';
import { profileAPI } from "../api/profileAPI";
import { UserProfileType, PhotosType } from '../types/types';
import { authActionCreators, AuthActionTypes } from './auth-reducer';
import { AppStateType } from './redux-store';

//initial State
export type PostDataType = {
    id: number
    date: string
    message: string
    likeCounter: number
}

let initialState = {
    postData: [
        {id: 1, date: '04/12/2020', message: "Hi, how are you?", likeCounter: 12},
        {id: 2, date: '04/12/2020', message: "It's my firs post", likeCounter: 13},
        {id: 3, date: '04/12/2020', message: "It's my second post", likeCounter: 14},
        {id: 4, date: '04/12/2020', message: "It's my third post", likeCounter: 15},
        {id: 5, date: '04/12/2020', message: "It's my fourth post", likeCounter: 16},
        {id: 6, date: '04/12/2020', message: "It's my fifth post", likeCounter: 17}
    ] as Array<PostDataType>,
    newPostText: "" as string,
    userProfile: null as UserProfileType | null,
    userStatus: "" as string | null,
    isFetching: false as boolean
};

type InitialStateType = typeof initialState

//Reducer
const profileReducer = (state = initialState, action: ProfileActionTypes):InitialStateType  => {

        switch (action.type) {
            case 'app/profile-reducer/ADD-POST':
                let newPostObj = {
                    id: 5,
                    date: action.date,
                    message: action.newPostText,
                    likeCounter: 0
                };
                
                return {
                    ...state,
                    postData: [newPostObj, ...state.postData],
                    newPostText: ""
                };

            case 'app/profile-reducer/UPDATE-TEXT-AREA': 

                return {
                    ...state,
                    newPostText: action.newText
                };
            ;

            case 'app/profile-reducer/SET_USER_PROFILE': 
                return {
                    ...state,
                    userProfile: action.profile
                }
            ;

            case 'app/profile-reducer/SET_USER_STATUS': {
                return {
                    ...state,
                    userStatus: action.status
                };
            }

            case 'app/profile-reducer/SAVE_PHOTO_SUCCESS': 
                return {
                    ...state,
                    userProfile: {...state.userProfile, photos: action.photos},
                }
            ;

            case 'app/profile-reducer/IS_FETCHING': 
                return {
                    ...state,
                    isFetching: action.isFetching
                }

            default:
                return state;
        }
    }

//Action Creators
type ProfileActionTypes = InferActionsType<typeof profileActionCreators>



export const profileActionCreators = {
    addPost: (newPostText: string, date: string)  => ({type: 'app/profile-reducer/ADD-POST', newPostText, date} as const),
    updateTextAreaActionCreator: (text: string)  => ({ type: 'app/profile-reducer/UPDATE-TEXT-AREA', newText: text } as const),
    setProfile: (profile: UserProfileType) => ({ type: 'app/profile-reducer/SET_USER_PROFILE', profile } as const),
    setUserStatus: (status:string | null) => ({type: 'app/profile-reducer/SET_USER_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType)  => ({type: 'app/profile-reducer/SAVE_PHOTO_SUCCESS', photos} as const),
    isFetching: (isFetching: boolean)  => ({type: 'app/profile-reducer/IS_FETCHING', isFetching} as const)
}



//side effects, Thinks

type ProfileReducerThunkType = ThunkType<ProfileActionTypes | AuthActionTypes> 

export const addNewPost = (newPostText: string, date: string): ProfileReducerThunkType => {
    return (dispatch) => dispatch(profileActionCreators.addPost(newPostText, date))
};

export const setUserProfile = (userId: number | null): ProfileReducerThunkType => async (dispatch) => { 
            dispatch(profileActionCreators.isFetching(true));
            const userProfile = await profileAPI.getUserProfile(userId);
            dispatch(profileActionCreators.setProfile(userProfile));
            dispatch(profileActionCreators.isFetching(false));
        }

export const setStatus = (userId:number | null): ProfileReducerThunkType => async (dispatch) => {
        const userStatus = await profileAPI.getUserStatus(userId)
                dispatch(profileActionCreators.setUserStatus(userStatus))
        }

export const updateStatus = (status: string | null): ProfileReducerThunkType => async (dispatch) => {
    const updateStatusResultCode = await profileAPI.updateUserStatus(status)
        if (updateStatusResultCode === ResultCode.success ){
            dispatch(profileActionCreators.setUserStatus(status))
        }
}

export const saveUserPhoto = (photo: File): ProfileReducerThunkType => async (dispatch) => {
    dispatch(profileActionCreators.isFetching(true))
    const updateUserPhotoResponse = await profileAPI.updateUserPhoto(photo)
        if (updateUserPhotoResponse.resultCode === ResultCode.success ){
            dispatch(profileActionCreators.savePhotoSuccess(updateUserPhotoResponse.data.photos));
            dispatch(authActionCreators.saveAuthUserPhotoSuccess(updateUserPhotoResponse.data.photos));
        }
    dispatch(profileActionCreators.isFetching(false))
}

export const saveProfileInfo = (profile: UserProfileType): ProfileReducerThunkType => async (dispatch, getState: ()=> AppStateType) => {
    const userId: number | null = getState().authorization.data!.id;
    const updateUserProfileResponse = await profileAPI.updateUserProfile(profile)
    if (updateUserProfileResponse.resultCode === ResultCode.success){
        dispatch(setUserProfile(userId))
    } else {
        return updateUserProfileResponse.messages;
    }
}

export default profileReducer;