import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer'
import { AppStateType } from '../../redux/redux-store'
import avatar from '../../assets/images/avatar.png';
import { Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import { FormikHelpers, useFormik } from 'formik'
import { CustomButton } from '../commonElements/CustomButton'


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
            <Grid container direction='column' spacing={2} >
                <Grid item>
                    <Paper square>
                        <Messages />
                    </Paper>
                </Grid>
                <Grid item>
                    <AddMessageFormChat />
                </Grid>
            </Grid>
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
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 500) {
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll (false)
        }

    }

    useEffect(() => {
        if (isAutoScroll){
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[messages])

    
    return(
        <div onScroll={scrollHandler} style={{overflowY: "scroll",height: "500px", padding: '1rem 0 0 1rem'}}>
            {messages.map((message: ChatMessageType) => <Message key={message.id} message={message}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
})

//Message component
const Message: React.FC<{message: ChatMessageType}> = React.memo(({message}) => {
    return(
        <div>
            <img src={message.photo ? message.photo: avatar} style={{ width: '30px'}} alt='user chat avatar'/> 
            <b>{message.userName}</b>
            <br/>
            <Typography>
                {message.message}
            </Typography>
            <hr/>
        </div>
    )
})

//AddMessageFormChat component
const AddMessageFormChat:React.FC = () => {

const status = useSelector((state: AppStateType)=> state.chat.status)

const sendMessageHandler = (values:  FormikValues, {setSubmitting, resetForm}: FormikHelpers<FormikValues>) => {
    if(!values){
        return;
    }
    sendMessage(values.message)
    resetForm({})
    setSubmitting(false)
}

const formik = useFormik({
    initialValues: {
        message: '',
    },
    onSubmit: sendMessageHandler
});



    return(
        <Paper square style={{padding: '1rem'}}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container direction='row' spacing={2}>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            size='small'
                            id="message"
                            name="message"
                            label="Type your message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <CustomButton disabled={status !== 'ready' || formik.isSubmitting}>
                            Send
                        </CustomButton>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default withAuthRedirect(ChatPage)

type FormikValues = {
    message: string
}

export type ChatMessageType =  {
    id: string
    message: string
    photo:  string
    userId: number
    userName: string
}