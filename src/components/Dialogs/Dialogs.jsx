import Dialog from './Dialog/Dialog'
import c from './Dialogs.module.css'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: "Tania"},
        {id: 2, name: "Pietia"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Vova"},
        {id: 5, name: "Marina"},
        {id: 6, name: "Vasia"},
        {id: 7, name: "Igor"}
    ]

    let messageData = [
        {id: 1, message: "Hello"},
        {id: 1, message: "How are you"}
    ]

    let dialogElements = dialogData.map( d => <Dialog name={d.name} id={d.id} /> )

    let messageElements = messageData.map( m => <Messages text={m.message} />)
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
        </div>
    )
}

export default Dialogs;