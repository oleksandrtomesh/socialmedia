import { headerAPI, loginApi } from '../api/api';

const ADD_DATA = 'ADD_DATA';

//wstanowluju initialState kotryj bude peredano jak poczatowe znaczenia state
//do redusera, bo w inszomu wypadku w reducer pryjde znaczenia "undefined" i bude pomylka
let initialState = {
    data: null,
    isAuth: false
};

//w takyj sposib state = initialState wstanowlujetsia znaczenia za zamowczuwaniam
//tobto jakszczo w dialogsReducer ne pryjszow rzoden state, to w state bude peredano
//initialState 
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
                isAuth: action.isAuth
            };
        default:
            return state;
            
    }
};
//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл NewMessage

export const addAuthUserData = (id, login, email, isAuth) => ({type: ADD_DATA, data: {id, login, email}, isAuth});

//thunkCreator for auth user
export const authUser = () => {
    return (dispatch) => {
        headerAPI.authUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {
                        id,
                        login,
                        email
                    } = data.data;
                    dispatch(addAuthUserData(id, login, email, true));
                }
            })
    }
}

export const login = (values) => (dispatch) => {
    loginApi.login(values).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(authUser());
        }
    });
}

export const logout = () => (dispatch) => {
    loginApi.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(addAuthUserData(null, null, null, false))
        }
    });
}

export default authReducer;