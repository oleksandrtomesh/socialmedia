import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer'
import { AppStateType } from '../../redux/redux-store'
import avatar from '../../assets/images/avatar.png';

export type ChatMessageType =  {
    id: string
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
    const status = useSelector((state: AppStateType)=> state.chat.status)

    useEffect(()=>{
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        } 
    },[])

    return (<div>
            {status === 'error' && <div>Some error ocurred. Please refresh tha page</div>}
            <>
                <Messages />
                <AddMessageFormChat />
            </>
    </div>
    )
}

const Messages: React.FC = React.memo(() => {

    const messages = useSelector((state: AppStateType) => state.chat.messages)  
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false)


    //do auto-scroll if user only near the bottom or at the 
    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll (false)
        }

    }

    useEffect(() => {
        if (isAutoScroll){
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
        
    },[messages])

    
    return(
        <div style={{height: "500px", overflowY: "scroll"}} onScroll={scrollHandler}>
            {messages.map((message: ChatMessageType) => <Message key={message.id} message={message}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
})

//Message component
const Message: React.FC<{message: ChatMessageType}> = React.memo(({message}) => {
    console.log('>>>>>message')
    return(
        <div>
            <img src={message.photo ? message.photo: avatar} style={{ width: '30px'}}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
})

//AddMessageFormChat component
const AddMessageFormChat:React.FC = () => {

const [message, setMessage] = useState('')
const dispatch = useDispatch()
const status = useSelector((state: AppStateType)=> state.chat.status)

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
                <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
            </div>
        </>
    )
}

export default withAuthRedirect(ChatPage);