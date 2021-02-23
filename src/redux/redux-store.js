import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from "./dialogs-reducer";
import friendsItemsReducer from "./friendItems-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer';

//combineReducer wlasne zajmajetsia pojednuwaniam reduseriv i dodaje ich do funkciji createStore,
//jaka w swoje chergu stworuje state
let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsItems: friendsItemsReducer,
    usersPage: usersReducer,
    authorization: authReducer,
    app: appReducer
})

//thunkMiddleware wnedrjaje poserednij etap przy stworeni stora
//jakyj wmije pracuwaty z funkcijamy, tobto zmoe rozkukorzuwaty funkcijy
//thunkcreator i dispatczyty z nych actiony
//potribno skaczatu 'redux-thunk' za dopomogoju npm abo yarn
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
//const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;