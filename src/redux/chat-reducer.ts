import { chatApi, StatusChangedSubscriberType, StatusType } from './../api/chatAPI';
import { ChatMessageAPIType, MessagesReceivedSubscriberType } from '../api/chatAPI';
import { InferActionsType, ThunkType } from '../types/types';
import { Dispatch } from 'redux';
import { v1 } from 'uuid';


export type ChatMessageType =  {
    message: string
    photo:  string
    userId: number
    userName: string
    id: string
}

let initialState= {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
};


//Reducer
const chatReducer = (state = initialState, action: ChatActionTypes): InitialStateType => {

    switch (action.type) {

        case 'app/chat-reducer/MESSAGES-RECEIVED':
            return {
                ...state,
                messages: [
                    ...state.messages, 
                    ...action.payload.messages.map(m => ({...m, id: v1()})) // map comes messages and add unique id
                    ].filter((m,index,array) => index >= array.length - 100) //save only last 100 messages
            }
        case 'app/chat-reducer/STATUS-CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        case 'app/chat-reducer/CLEAR-MESSAGES':
            return {
                ...state,
                messages: []
            }
        default:
            return state
    }
}




//Action Creators
type ChatActionTypes = InferActionsType<typeof chatActionCreators>

export const chatActionCreators = {
    messagesReceived: (messages: ChatMessageAPIType[]) =>
        ({ type: 'app/chat-reducer/MESSAGES-RECEIVED', payload: { messages } } as const),
    statusChanged: (status: StatusType) =>
        ({ type: 'app/chat-reducer/STATUS-CHANGED', payload: { status } } as const),
    clearMessages: () => ({type: 'app/chat-reducer/CLEAR-MESSAGES'} as const)
}


//side effect, thunks

//make memoization for callbacks
let _newMessageHandler: MessagesReceivedSubscriberType | null = null
let _statusChangedHandler: StatusChangedSubscriberType | null = null

const newMessageHandler = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        //if null initializing  _newMessageHandler
        _newMessageHandler = (messages: ChatMessageAPIType[]) => {
            dispatch(chatActionCreators.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

const statusChangedHandler = (dispatch: Dispatch) => {
    if(_statusChangedHandler === null){ 
        //if null initializing  _statusChangedHandler
        _statusChangedHandler = (status: StatusType) => {
            dispatch(chatActionCreators.statusChanged(status))
        }
    }
    return _statusChangedHandler
}




export type ChatReducerThunkType = ThunkType<ChatActionTypes>

export const startMessagesListening = (): ChatReducerThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe('message-received',newMessageHandler(dispatch))
    chatApi.subscribe('status-changed',statusChangedHandler(dispatch))

}

export const stopMessagesListening = (): ChatReducerThunkType => async (dispatch) => {
    chatApi.unsubscribe('message-received',newMessageHandler(dispatch))
    chatApi.unsubscribe('status-changed',statusChangedHandler(dispatch))
    dispatch(chatActionCreators.clearMessages())
    chatApi.stop()
}

export const sendMessage = (message: string): void =>  {
    chatApi.sendMessage(message)
}

export default chatReducer;


type InitialStateType = typeof initialState