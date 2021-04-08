import { ThunkType } from '../types/types';
import { authUser } from './auth-reducer';

//Action types
const INITIALIZE_APP = 'myApp/auth-reducer/INITIALIZE_APP';

//Initial State


let initialState = {
    initialized: false
};

type InitialStateType = typeof initialState
//Reducer


const appReducer = (state = initialState, action: ActionType): InitialStateType => {

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
type ActionType = initializingSuccessActionCreatorType;

type initializingSuccessActionCreatorType = {
    type: typeof INITIALIZE_APP
};

export const initializingSuccess = ():initializingSuccessActionCreatorType  => ({type: INITIALIZE_APP});

//thunkCreator for auth user

export type appThunkType = ThunkType<ActionType>

export const initialized = (): appThunkType => {
    //thunk what return resolve of all promises
    return (dispatch) => {
        let promise = dispatch(authUser());
        Promise.all([promise]).then(() => {
            dispatch(initializingSuccess())
        })
    }
}

export default appReducer;