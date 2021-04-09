import React from 'react'
import Dialog from './Dialog/Dialog'
import c from './Dialogs.module.css'
import { DialogsPropsType } from './DialogsContainer'
import Messages from './Messages/Messages'
import NewMessageContainer from './NewMessage/NewMessageContainer'


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogPage.dialogData.map( d => <Dialog key={d.name} name={d.name} id={d.id} /> )

    let messageElements = props.dialogPage.messageData.map( m => <Messages key={m.message} message={m.message} id={m.id} />)

    return (
        <div className={c.dialogs}>
            <div className={c.dialog}>
                <h3>Dialogs</h3>
                { dialogElements }
            </div>
            <div className={c.message}>
                <h3>Messages</h3>
                { messageElements }
            </div>
            <div>
                <NewMessageContainer />
            </div>
        </div>
    )
}

export default Dialogs;