import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer'
import { AppStateType } from '../../redux/redux-store'

export type ChatMessageType =  {
    message: string
    photo:  string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {

    return(<>
    <Chat/>
    </>
    )
}

const Chat:React.FC = () => {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        } 
    },[])

    return(
        <>
            <Messages/>
            <AddMessageFormChat />
        </>
    )
}

const Messages: React.FC = () => {

    const messages = useSelector((state: AppStateType) => state.chat.messages)  

    return(
        <div style={{height: "500px", overflowY: "scroll"}} >
            {messages.map((message: ChatMessageType, index) => <Message key={index} message={message}/>)}
        </div>
    )
}

//Message component
const Message: React.FC<{message: ChatMessageType}> = ({message}) => {

    return(
        <div>
            <img src={message.photo} style={{ width: '30px'}}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

//AddMessageFormChat component
const AddMessageFormChat:React.FC = () => {

const [message, setMessage] = useState('')
const [wsStatus, setWsStatus] = useState<'pending' | 'ready'>('pending')


const sendMessageHandler = () => {
    if(!message){
        return;
    }
    sendMessage(message)
    setMessage('')
}

    return(
        <>
            <div>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                <button disabled={false} onClick={sendMessageHandler}>Send</button>
            </div>
        </>
    )
}

export default withAuthRedirect(ChatPage);