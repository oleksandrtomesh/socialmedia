import React, { useEffect, useRef, useState } from 'react'

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
    const [webSocketChanel, setWebSocketChanel] = useState<WebSocket | null>(null)
    
    useEffect(()=>{
        //during firs render creat web socket chanel and save it inside state
        let wsChanel: WebSocket

        //reconnect function, if chanel will close try to reconect every 3 sec
        const closeHandler = () => {
            console.log('WS closed')
            setTimeout(createWsChanel, 3000)
        }

        //create WebSocket Chanel function
        function createWsChanel () {
            //remove event listener and close chanel in get new wsChanel
            wsChanel?.removeEventListener('close', closeHandler)
            wsChanel?.close()
            //make new ws chanel and add event listener for close event
            wsChanel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            wsChanel.addEventListener ('close', closeHandler)
            //set wsChanel into local state
            setWebSocketChanel(wsChanel)
        }
        createWsChanel();
        //clean up event listener
        return () => {
            wsChanel.removeEventListener('close', closeHandler)
            wsChanel.close()
        }
    },[])

    return(
        <>
            <Messages webSocketChanel={webSocketChanel}/>
            <AddMessageFormChat webSocketChanel={webSocketChanel}/>
        </>
    )
}

const Messages: React.FC<{webSocketChanel: WebSocket | null}> = ({webSocketChanel}) => {

    const [messages, setMessages] = useState<Array<ChatMessageType>>([])

    useEffect( () => {
        //handle for ws message event listener
        const messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => { //set previous and new messages into local state
                return [...prevMessages, ...newMessages]
            })
        }
        //subscribe event message os wer socket chanel 
        webSocketChanel?.addEventListener('message', messageHandler)

        //clean up subscription
        return () => {
            webSocketChanel?.removeEventListener('message',messageHandler)
        }
    }, [webSocketChanel])

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
const AddMessageFormChat:React.FC<{webSocketChanel: WebSocket | null}> = ({webSocketChanel}) => {

const [message, setMessage] = useState('')
const [wsStatus, setWsStatus] = useState<'pending' | 'ready'>('pending')

useEffect(() =>{
    //make handle for open ws event
    const openHandler = (): void => {
        setWsStatus("ready")
    }
    //subscribe open ws event
    webSocketChanel?.addEventListener('open', openHandler)
    //clean up subscription
    return () => {
        webSocketChanel?.removeEventListener('open',openHandler)
    }
}, [webSocketChanel])

const sendMessage = () => {
    if(!message){
        return;
    }
    webSocketChanel?.send(message)
    setMessage('')
}

    return(
        <>
            <div>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                <button disabled={webSocketChanel === null || wsStatus === 'pending'} onClick={sendMessage}>Send</button>
            </div>
        </>
    )
}

export default ChatPage;