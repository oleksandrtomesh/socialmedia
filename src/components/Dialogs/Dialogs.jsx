import Dialog from './Dialog/Dialog'
import c from './Dialogs.module.css'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialog}>
                <Dialog name="Tania" id='1'/>
                <Dialog name="Pietia" id="2"/> 
                <Dialog name="Sasha" id="3" /> 
                <Dialog name="Vova" id="4" /> 
                <Dialog name="Marina" id="5" /> 
                <Dialog name="Vasia" id="6"/> 
                <Dialog name="Igor" id="7"/>           
            </div>
            <div className={c.message}>
                <Messages text="Hello" />
                <Messages text="How are you" />
            </div>
        </div>
    )
}

export default Dialogs;