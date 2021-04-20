import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from "./dialogs-reducer";
import friendsItemsReducer from "./friendItems-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer';

//combine reducers function what make new reducer
let rootReducer = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsItems: friendsItemsReducer,
    usersPage: usersReducer,
    authorization: authReducer,
    app: appReducer
})

//get type of function rootReducer
type RootReducerType = typeof rootReducer // (globalState: AppStateType) => AppStateType
//get type of response of function rootReducer
export type AppStateType = ReturnType<RootReducerType> 


// //@ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;

export default store;