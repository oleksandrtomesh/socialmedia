import c from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={c.messages}>
            {props.text}
        </div>
    )
}

export default Messages;