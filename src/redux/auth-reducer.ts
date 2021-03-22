import { headerAPI, loginApi, profileAPI } from '../api/api';
import { UserProfileType, PhotosType } from '../types/types';

//Actions
const ADD_DATA = 'app/auth-reducer/ADD_DATA';
const ADD_CAPTCHA_URL ='app/auth-reducer/ADD_CAPTCHA_URL';
const AUTH_USER_PROFILE = 'app/auth-reducer/AUTH_USER_PROFILE';
const SAVE_PHOTO_SUCCESS = 'app/auth-reducer/SAVE_PHOTO_SUCCESS';

//Initial State
type DataType = {
    id: number | null
    login: string | null
    email: string | null
}


let initialState= {
    data: null as DataType | null,
    isAuth: false,  //check if user login
    captcha: undefined,  //captcha url if result code === 10
    authUserProfile: null as UserProfileType | null,
};

type InitialStateType = typeof initialState

//Reducer
const authReducer = (state = initialState, action:any):InitialStateType => {

    switch (action.type) {

        case ADD_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: action.isAuth,
            };

        case ADD_CAPTCHA_URL:
            return {
                ...state,
                captcha: action.path
            };

        case AUTH_USER_PROFILE:
            return{
                ...state,
                authUserProfile: action.userProfile
            };

            case SAVE_PHOTO_SUCCESS: 
                return {
                    ...state,
                    authUserProfile: {...state.authUserProfile, photos: action.photos},
                }
            ;

        default:
            return state;
    }
};




//Action Creators
type AuthReducerActionCreatorType = {
    type: typeof ADD_DATA
    data: DataType
    isAuth: boolean
}
export const addAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean):AuthReducerActionCreatorType => 
    ({type: ADD_DATA, data: {id, login, email}, isAuth});

type AddCaptchaUrlType = {
    type: typeof ADD_CAPTCHA_URL
    path: string | undefined
}
export const addCaptchaUrl = (captchaUrl: string | undefined):AddCaptchaUrlType => ({type: ADD_CAPTCHA_URL, path: captchaUrl});

type addAuthUserProfileActionCreatorType ={
    type: typeof AUTH_USER_PROFILE
    userProfile: UserProfileType
}
export const addAuthUserProfile = (userProfile: UserProfileType):addAuthUserProfileActionCreatorType => 
    ({type: AUTH_USER_PROFILE, userProfile});

type saveAuthUserPhotoSuccessActionCreatorType ={
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const saveAuthUserPhotoSuccess = (photos: PhotosType):saveAuthUserPhotoSuccessActionCreatorType => 
    ({type: SAVE_PHOTO_SUCCESS, photos})

//side effect, thunks

export const authUser = () => async (dispatch: any) => {
        const data = await headerAPI.authUser()
        if (data.resultCode === 0) {
            let {
                id,
                login,
                email
            } = data.data;
            dispatch(addAuthUserData(id, login, email, true));
            const response = await profileAPI.getUserProfile(id)
            dispatch(addAuthUserProfile(response.data));
        }
    }

export const login = (values:any) => {
    return async (dispatch: any) => {
        const response = await loginApi.login(values);
        if (response.data.resultCode === 0) {
            dispatch(authUser());
            dispatch(addCaptchaUrl(undefined));
        } else {
            if (response.data.resultCode === 10){
                const captcha = await loginApi.getCaptcha()
                dispatch(addCaptchaUrl(captcha.data.url))
            }
            return response.data.messages[0]
        }
    };
}

export const logout = () => async (dispatch: any) => {
    const response = await loginApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(addAuthUserData(null, null, null, false))
    }
}

export default authReducer;