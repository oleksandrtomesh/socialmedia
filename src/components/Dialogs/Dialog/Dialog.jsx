import c from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={c.dialog}>
            {props.dialog}
        </div>
    )
}

export default Dialog;