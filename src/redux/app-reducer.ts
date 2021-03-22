import { authUser } from './auth-reducer';

//Action types
const INITIALIZE_APP = 'myApp/auth-reducer/INITIALIZE_APP';

//Initial State


let initialState = {
    initialized: false
};

type InitialStateType = typeof initialState
//Reducer


const appReducer = (state = initialState, action: any): InitialStateType => {

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

//action creators

type initializingSuccessActionCreatorType = {
    type: typeof INITIALIZE_APP
}

export const initializingSuccess = ():initializingSuccessActionCreatorType  => ({type: INITIALIZE_APP});

//thunkCreator for auth user
export const initialized = () => {
    return (dispatch: any) => {
        let promise = dispatch(authUser());
        //коли ми отримуємо resolve зі всіх промісів тоді dispatch (initializingSuccess) щоб властивіть 
        //initialized змінилась на true
        Promise.all([promise]).then(() => {
            dispatch(initializingSuccess())
        })
    }
}

export default appReducer;