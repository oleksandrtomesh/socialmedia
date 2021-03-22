const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType={
    id: number
    name: string
}
type MessageType={
    id: number
    message: string
}

const initialState = {
    messageData:[
        {id: 1, message: "Hello World"},
        {id: 2, message: "Here will be message section soon :-)"}
    ] as Array<MessageType> , 
    dialogData: [
        {id: 1, name: "User1"},
        {id: 2, name: "User2"},
        {id: 3, name: "User3"},
        {id: 4, name: "User4"},
        {id: 5, name: "User5"},
        {id: 6, name: "User6"},
        {id: 7, name: "User7"}
    ] as Array<DialogType>,
    newMessageText: "" as string
};

export type InitialStateType = typeof initialState



const dialogsReducer = (state = initialState, action: any):InitialStateType  => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageObj = {
                id: 5,
                message: action.message,
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessageObj], //append newMessage into messageData array
                newMessageText: ""
            };
            
        default:
            return state;
            
    }
};


// action creators
type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    message: string
}

export const addMessageActionCreator = (message: string): AddMessageActionCreatorType => ({type: ADD_MESSAGE, message})

//thunk creator

export const addMessage = (message: string) => {
    return (dispatch: any) => dispatch(addMessageActionCreator(message))
};


export default dialogsReducer;