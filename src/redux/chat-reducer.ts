import { chatApi } from './../api/chatAPI';
import { ChatMessageType, SubscriberType } from '../api/chatAPI';
import { InferActionsType, ThunkType } from '../types/types';
import { Dispatch } from 'redux';


let initialState= {
    messages: [] as ChatMessageType[]
};



type InitialStateType = typeof initialState

//Reducer
const chatReducer = (state = {messages: [] as ChatMessageType[]}, action: ChatActionTypes): InitialStateType => {

    switch (action.type) {

        case 'app/chat-reducer/MESSAGES-RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state
    }
}




//Action Creators
type ChatActionTypes = InferActionsType<typeof chatActionCreators>

export const chatActionCreators = {
    messagesReceived: (messages: ChatMessageType[]) => 
        ({type: 'app/chat-reducer/MESSAGES-RECEIVED', payload: {messages}} as const)
}


//side effect, thunks

//make memoization for callback
let _newMessageHandler: SubscriberType | null = null

const newMessageHandler = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        //if null initializing  _newMessageHandler
        _newMessageHandler = (messages: ChatMessageType[]) => {
            dispatch(chatActionCreators.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}



export type ChatReducerThunkType = ThunkType<ChatActionTypes>

export const startMessagesListening = (): ChatReducerThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandler(dispatch))
}

export const stopMessagesListening = (): ChatReducerThunkType => async (dispatch) => {
    chatApi.unsubscribe(newMessageHandler(dispatch))
    chatApi.stop()
}

export const sendMessage = (message: string): void => {
    chatApi.sendMessage(message)
}

export default chatReducer;