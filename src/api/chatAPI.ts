
let subscribers = [] as SubscriberType[]

//creat web socket chanel 
let wsChanel: WebSocket | null = null

//create WebSocket Chanel function
function createWsChanel () {
    //remove event listener and close chanel in get new wsChanel
    wsChanel?.removeEventListener('close', closeHandler)
    wsChanel?.close()
    //make new ws chanel and add event listener for close event
    wsChanel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    wsChanel.addEventListener ('close', closeHandler)
    wsChanel.addEventListener('message', messageHandler)
}

//reconnect function, if chanel will close try to reconect every 3 sec
const closeHandler = () => {
    console.log('WS closed')
    setTimeout(createWsChanel, 3000)
}

//handle for ws message event listener
const messageHandler = (e: MessageEvent) => {
    const messages = JSON.parse(e.data)
    subscribers.forEach(s => s(messages))
}

export const chatApi = {
    //create ws chanel when chat component will render
    start(){
        createWsChanel()
    },
    //remove all event listeners, close ws chanel and clean up subscribers array when chat component un-mount
    stop(){
        subscribers = []
        wsChanel?.removeEventListener ('close', closeHandler)
        wsChanel?.removeEventListener('message', messageHandler)
        wsChanel?.close()
    },
    subscribe(callback: SubscriberType){
        subscribers.push(callback)
        return () => subscribers = subscribers.filter(s => s !== callback)
    },
    unsubscribe(callback: SubscriberType){
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string){
        wsChanel?.send(message)
    }
}


export type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType =  {
    message: string
    photo:  string
    userId: number
    userName: string
}
