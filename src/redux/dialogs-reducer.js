const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';

//wstanowluju initialState kotryj bude peredano jak poczatowe znaczenia state
//do redusera, bo w inszomu wypadku w reducer pryjde znaczenia "undefined" i bude pomylka
let initialState = {
    messageData:[
        {id: 1, message: "Hello"},
        {id: 1, message: "How are you"}
    ],
    dialogData: [
        {id: 1, name: "Tania"},
        {id: 2, name: "Pietia"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Vova"},
        {id: 5, name: "Marina"},
        {id: 6, name: "Vasia"},
        {id: 7, name: "Igor"}
    ],
    newMessageText: ""
};

//w takyj sposib state = initialState wstanowlujetsia znaczenia za zamowczuwaniam
//tobto jakszczo w dialogsReducer ne pryjszow rzoden state, to w state bude peredano
//initialState 
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageObj = {
                id: 5,
                message: state.newMessageText,
            };
            //powertajemo odrazu nowyj state, ne stworiujuczy zminoji
            return {
                ...state,
                //koly my wpysujemo pisla spred operatora vlastywist kotra  
                //je w nashomu state to my tym samym perepysujemo ciu wlastywist
                messageData: [...state.messageData, newMessageObj],
                newMessageText: ""
            };
        case UPDATE_MESSAGE_AREA:{
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        default:
            return state;
            
    }
};
//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл NewMessage

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageAreaActionCreator = (text) => ({ type: UPDATE_MESSAGE_AREA, newText: text })

export default dialogsReducer;