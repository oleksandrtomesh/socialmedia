

let subscribers: SubscribersType  = {
    'message-received': [],
    'status-changed': []
} 

//creat web socket chanel 
let wsChanel: WebSocket | null = null

//handlers for wsChanel event listeners

//reconnect function, if chanel will close try to reconect every 3 sec
const closeHandler = () => {
    console.log('WS closed')
    setTimeout(createWsChanel, 3000)
}

//handle for ws message event listener
const messageHandler = (e: MessageEvent) => {
    const messages = JSON.parse(e.data)
    subscribers["message-received"].forEach(s => s(messages))
}

//notify subscribers that ws chanel is open changing status to ready
const openHandler = () => {
    notifySubscriberAboutStatus('ready')
}

const errorHandler = () => {
    notifySubscriberAboutStatus('error')
}

//function what remove ws chanel event listners and close ws chanel
const cleanUp = () => {
    wsChanel?.removeEventListener ('close', closeHandler)
    wsChanel?.removeEventListener('message', messageHandler)
    wsChanel?.removeEventListener('open', openHandler)
    wsChanel?.removeEventListener('error', errorHandler)
    wsChanel?.close()
}


const notifySubscriberAboutStatus = (status: StatusType) => {
    subscribers["status-changed"].forEach(s => s(status))
}

//create WebSocket Chanel function
function createWsChanel () {
    //remove event listener and close chanel if get new wsChanel
    cleanUp()
    //make new ws chanel and add event listeners
    wsChanel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    notifySubscriberAboutStatus('pending')
    wsChanel.addEventListener ('close', closeHandler)
    wsChanel.addEventListener('message', messageHandler)
    wsChanel.addEventListener('open', openHandler)
    wsChanel.addEventListener('error', errorHandler)
}


export const chatApi = {
    //create ws chanel when chat component will render
    start(){
        createWsChanel()
    },
    //remove all event listeners, close ws chanel and clean up subscribers array when chat component un-mount
    stop(){
        subscribers["message-received"] = []
        subscribers["status-changed"] = []
        cleanUp()
    },
    subscribe(eventName: EventsNames ,callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType){
        //@ts-ignore
        subscribers[eventName].push(callback)
        //@ts-ignore
        return () => subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    unsubscribe(eventName: EventsNames ,callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType){
        //@ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string){
        wsChanel?.send(message)
    }
}

//types

type SubscribersType = {
    'message-received': MessagesReceivedSubscriberType[],
    'status-changed': StatusChangedSubscriberType[]
}

export type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void
export type StatusChangedSubscriberType = (status: StatusType) => void

export type ChatMessageAPIType =  {
    message: string
    photo:  string
    userId: number
    userName: string
}
export type StatusType = 'pending' | 'ready' | 'error'
export type EventsNames = 'message-received' | 'status-changed'