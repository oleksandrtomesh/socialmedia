const ADD_MESSAGE = 'ADD-MESSAGE';

//wstanowluju initialState kotryj bude peredano jak poczatowe znaczenia state
//do redusera, bo w inszomu wypadku w reducer pryjde znaczenia "undefined" i bude pomylka
let initialState = {
    messageData:[
        {id: 1, message: "Hello World"},
        {id: 2, message: "Here will be message section soon :-)"}
    ],
    dialogData: [
        {id: 1, name: "User1"},
        {id: 2, name: "User2"},
        {id: 3, name: "User3"},
        {id: 4, name: "User4"},
        {id: 5, name: "User5"},
        {id: 6, name: "User6"},
        {id: 7, name: "User7"}
    ],
};

//w takyj sposib state = initialState wstanowlujetsia znaczenia za zamowczuwaniam
//tobto jakszczo w dialogsReducer ne pryjszow rzoden state, to w state bude peredano
//initialState 
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageObj = {
                id: 5,
                message: action.message,
            };
            //powertajemo odrazu nowyj state, ne stworiujuczy zminoji
            return {
                ...state,
                //koly my wpysujemo pisla spred operatora vlastywist kotra  
                //je w nashomu state to my tym samym perepysujemo ciu wlastywist
                messageData: [...state.messageData, newMessageObj],
                newMessageText: ""
            };
            
        default:
            return state;
            
    }
};
//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл NewMessage

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message})

//thunk creator

export const addMessage = (message) => {
    return (dispatch) => dispatch(addMessageActionCreator(message))
};


export default dialogsReducer;