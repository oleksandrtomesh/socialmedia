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
    return (
        <div className={c.dialogs}>
            <div className={c.dialog}>
                <h3>Dialogs</h3>
                <Dialog 
                name={dialogData[0].name} 
                id={dialogData[0].id}
                />
                <Dialog 
                name={dialogData[1].name} 
                id={dialogData[1].id}
                />
                <Dialog 
                name={dialogData[2].name} 
                id={dialogData[2].id}
                />  
            </div>
            <div className={c.message}>
                <h3>Messages</h3>
                <Messages text={messageData[0].message} />
                <Messages text={messageData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;