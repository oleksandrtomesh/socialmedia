import React from 'react';
import c from './Messages.module.css'


const Messages: React.FC<MessagePropsType> = ({message, id}) => {
    return (
        <div className={c.messages}>
            {message}
        </div>
    )
}

export default Messages;

type MessagePropsType = {
    id: number
    message:string
}