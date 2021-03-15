import React, { useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';
import { TextField } from '@material-ui/core';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.userStatus);
    
    useEffect( () => {setStatus(props.userStatus)}, [props.userStatus] );

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
        <div className={styles.profileStatus}>
            {
                editMode
                    ? <div>
                        <TextField autoFocus={true}
                            onChange={onStatusChange}
                            onBlur={deactivateStatusEditor}
                            type="text"
                            value={status} 
                            label="Status"
                            variant="outlined"
                        />
                    </div>
                    
                    : <div className={styles.status}>
                        <span onDoubleClick={activateStatusEditor}> <b>Status: </b>{status || `No Status`}</span>
                        <div>
                            <i>DoubleClick to change</i>
                        </div>
                    </div>

            }
        </div>
    );
}

export default ProfileStatusWithHooks;