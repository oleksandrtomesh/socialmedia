import React from 'react';
import { NavLink} from 'react-router-dom'
import c from './Dialog.module.css'

const Dialog: React.FC<DialogPropsTYpe> = ({id, name}) => {
    return (
        <div className={c.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}

export default Dialog;

type DialogPropsTYpe = {
    id: number
    name: string
}