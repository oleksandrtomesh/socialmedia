import Dialog from './Dialog/Dialog'
import c from './Dialogs.module.css'
import Messages from './Messages/Messages'
import NewMessages from './NewMessage/NewMessage'

const Dialogs = (props) => {


    let dialogElements = props.dialogPage.dialogData.map( d => <Dialog name={d.name} id={d.id} /> )

    let messageElements = props.dialogPage.messageData.map( m => <Messages text={m.message} />)

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
                <NewMessages dispatch={props.dispatch} newMessageText={props.dialogPage.newMessageText} />
            </div>
        </div>
    )
}

export default Dialogs;