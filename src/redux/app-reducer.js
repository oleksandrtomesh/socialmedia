import { authUser } from './auth-reducer';


const INITIALIZE_APP = 'INITIALIZE_APP';

//wstanowluju initialState kotryj bude peredano jak poczatowe znaczenia state
//do redusera, bo w inszomu wypadku w reducer pryjde znaczenia "undefined" i bude pomylka
let initialState = {
    initialized: false
};

//w takyj sposib state = initialState wstanowlujetsia znaczenia za zamowczuwaniam
//tobto jakszczo w dialogsReducer ne pryjszow rzoden state, to w state bude peredano
//initialState 
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
            
    }
};
//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл NewMessage

export const initializingSuccess = () => ({type: INITIALIZE_APP});

//thunkCreator for auth user
export const initialized = () => {
    return (dispatch) => {
        //з thunkCreator нам повертається проміс
        let promise = dispatch(authUser());
        //коли ми отримуємо resolve зі всіх промісів тоді dispatch (initializingSuccess) щоб властивіть 
        //initialized змінилась на true
        Promise.all([promise]).then(() => {
            dispatch(initializingSuccess())
        })
    }
}

export default appReducer;