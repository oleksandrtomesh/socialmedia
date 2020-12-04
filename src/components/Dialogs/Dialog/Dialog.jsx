import { NavLink, Route } from 'react-router-dom'
import c from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={c.dialog}>
           <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink> 
        </div>
    )
}

export default Dialog;