import { ResultCode } from '../api/api';
import { loginApi } from "../api/loginApi";
import { profileAPI } from "../api/profileAPI";
import { headerAPI } from "../api/headerAPI";
import { UserProfileType, PhotosType, InferActionsType, ThunkType } from '../types/types';

//Initial State
type DataType = {
    id: number | null
    login: string | null
    email: string | null
}

let initialState= {
    data: null as DataType | null,
    isAuth: false,  //check if user login
    captcha: undefined as string | undefined,  //captcha url if result code === 10
    authUserProfile: null as UserProfileType | null
};

type InitialStateType = typeof initialState

//Reducer
const authReducer = (state = initialState, action: AuthActionTypes):InitialStateType => {

    switch (action.type) {

        case 'app/auth-reducer/ADD_DATA':
            return {
                ...state,
                data: action.data,
                isAuth: action.isAuth,
            };

        case 'app/auth-reducer/ADD_CAPTCHA_URL':
            return {
                ...state,
                captcha: action.path
            };

        case 'app/auth-reducer/AUTH_USER_PROFILE':
            return{
                ...state,
                authUserProfile: action.userProfile
            };

            case 'app/auth-reducer/SAVE_PHOTO_SUCCESS': 
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
export type AuthActionTypes = InferActionsType<typeof authActionCreators>

export const authActionCreators = {

    addAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => 
        ({type: 'app/auth-reducer/ADD_DATA', data: {id, login, email}, isAuth} as const),
    addCaptchaUrl: (captchaUrl: string | undefined) => ({type: 'app/auth-reducer/ADD_CAPTCHA_URL', path: captchaUrl} as const),
    addAuthUserProfile: (userProfile: UserProfileType) => ({type: 'app/auth-reducer/AUTH_USER_PROFILE', userProfile} as const),
    saveAuthUserPhotoSuccess: (photos: PhotosType) => 
        ({type: 'app/auth-reducer/SAVE_PHOTO_SUCCESS', photos} as const)
}


//side effect, thunks

export type AuthReducerThunkType = ThunkType<AuthActionTypes>

export const authUser = (): AuthReducerThunkType => async (dispatch) => {
        const data = await headerAPI.authUser()
        if (data.resultCode === ResultCode.success) {
            let {
                id,
                login,
                email
            } = data.data;
            dispatch(authActionCreators.addAuthUserData(id, login, email, true));
            const userProfile = await profileAPI.getUserProfile(id)
            dispatch(authActionCreators.addAuthUserProfile(userProfile));
        }
    }

type ValuesType = {
    email: string
    password: string
}

export const login = (values: ValuesType):AuthReducerThunkType => {
    return async (dispatch) => {
        const loginResponse = await loginApi.login(values);
        if (loginResponse.resultCode === ResultCode.success) {
            dispatch(authUser());
            dispatch(authActionCreators.addCaptchaUrl(undefined));
        } else {
            if (loginResponse.resultCode === ResultCode.captchaIsRequired){
                const captchaUrl = await loginApi.getCaptcha()
                dispatch(authActionCreators.addCaptchaUrl(captchaUrl))
            }
            return loginResponse.messages[0]
        }
    };
}

export const logout = ():AuthReducerThunkType => async (dispatch) => {
    const logoutResponse = await loginApi.logout();
    if (logoutResponse.resultCode === ResultCode.success) {
        dispatch(authActionCreators.addAuthUserData(null, null, null, false))
    }
}

export default authReducer;