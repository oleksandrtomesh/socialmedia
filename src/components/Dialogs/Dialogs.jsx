import Dialog from './Dialog/Dialog'
import c from './Dialogs.module.css'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialog}>
                <Dialog dialog="Tania" />
                <Dialog dialog="Pietia" /> 
                <Dialog dialog="Sasha" /> 
                <Dialog dialog="Vova" /> 
                <Dialog dialog="Marina" /> 
                <Dialog dialog="Vasia" /> 
                <Dialog dialog="Igor" />           
            </div>
            <div className={c.message}>
                <Messages text="Hello" />
                <Messages text="How are you" />
            </div>
        </div>
    )
}

export default Dialogs;