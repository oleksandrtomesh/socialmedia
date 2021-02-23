import { headerAPI, loginApi } from '../api/api';


const ADD_DATA = 'ADD_DATA';
const ADD_CAPTCHA_URL ='ADD_CAPTCHA_URL'

//wstanowluju initialState kotryj bude peredano jak poczatowe znaczenia state
//do redusera, bo w inszomu wypadku w reducer pryjde znaczenia "undefined" i bude pomylka
let initialState = {
    data: null,
    isAuth: false,
    errorSubmitMessage: undefined,
    captcha: undefined  //captcha url if result code === 10
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                //koly my wpysujemo pisla spred operatora vlastywist kotra  
                //je w nashomu state to my tym samym perepysujemo ciu wlastywist
                data: action.data,
                //jakszczo do nas prychodiat korystuwaci z servera, to my wstanowlujemo isAuth = true
                //szczob pokazatu, szczo korystuwa zaloguwawsia
                isAuth: action.isAuth,
                errorSubmitMessage: undefined
            };
        case ADD_CAPTCHA_URL:{
            return {
                ...state,
                captcha: action.path

            }
        }

        default:
            return state;
    }
};
//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл NewMessage

export const addAuthUserData = (id, login, email, isAuth) => ({type: ADD_DATA, data: {id, login, email}, isAuth});
export const addCaptchaUrl = (captchaUrl) => ({type: ADD_CAPTCHA_URL, path: captchaUrl})

//thunkCreator for auth user
export const authUser = () => {
    return async (dispatch) => {
        const data = await headerAPI.authUser()
        if (data.resultCode === 0) {
            let {
                id,
                login,
                email
            } = data.data;
            dispatch(addAuthUserData(id, login, email, true));
        }
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