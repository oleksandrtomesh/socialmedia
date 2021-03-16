import { headerAPI, loginApi, profileAPI } from '../api/api';

//Actions
const ADD_DATA = 'app/auth-reducer/ADD_DATA';
const ADD_CAPTCHA_URL ='app/auth-reducer/ADD_CAPTCHA_URL';
const AUTH_USER_PROFILE = 'app/auth-reducer/AUTH_USER_PROFILE';
const SAVE_PHOTO_SUCCESS = 'app/auth-reducer/SAVE_PHOTO_SUCCESS';

//Initia State
let initialState = {
    data: null,
    isAuth: false,  //check if user login
    captcha: undefined,  //captcha url if result code === 10
    authUserProfile: null
};


//Reducer
const authReducer = (state = initialState, action) => {

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

export const addAuthUserData = (id, login, email, isAuth) => ({type: ADD_DATA, data: {id, login, email}, isAuth});
export const addCaptchaUrl = (captchaUrl) => ({type: ADD_CAPTCHA_URL, path: captchaUrl});
export const addAuthUserProfile = (userProfile) => ({type: AUTH_USER_PROFILE, userProfile});
export const saveAuthUserPhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

//side effect, thunks

export const authUser = () => async (dispatch) => {
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

export const login = (values) => {
    return async (dispatch) => {
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

export const logout = () => async (dispatch) => {
    const response = await loginApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(addAuthUserData(null, null, null, false))
    }
}

export default authReducer;