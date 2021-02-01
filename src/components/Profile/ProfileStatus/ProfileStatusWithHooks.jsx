import React, { useState } from 'react';


const ProfileStatusWithHooks = (props) => {

    //create state with help of useState (import from react)
    //useState return array. Firs element it is value second emlemet it is func to change this value
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.userStatus);
    
    const activateStatusEditor = () => {
        setEditMode(true);
    }

    const deactivateStatusEditor = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div>
            {
                //w zalenosto wid lokalnogo stetu, pokazujemo abo Span, jakszo editMode false
                //pisla dobleClick editMode zminujetsia na true, za dopomogoju obrobnyka podij onDobleClick
                //i pokarzetsia input z autofocus, koly zaberemo autofocus to automatyczno zjawytsia <span>
                editMode
                    ? <input autoFocus={true}
                        onChange={onStatusChange}
                        onBlur={deactivateStatusEditor}
                        type="text"
                        value={status} />
                    : <span onDoubleClick={activateStatusEditor}> {status || `No Status`}</span>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;