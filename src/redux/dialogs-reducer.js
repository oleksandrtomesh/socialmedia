const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageObj = {
                id: 5,
                message: state.newMessageText,
            };
            state.messageData.push(newMessageObj);
            state.newMessageText = "";
            return state;
        case UPDATE_MESSAGE_AREA:
            state.newMessageText = action.newText;
            return state
        default:
            return state;
    }
};
//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл NewMessage

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageAreaActionCreator = (text) => ({ type: UPDATE_MESSAGE_AREA, newText: text })

export default dialogsReducer;