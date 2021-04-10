import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';
import { TextField } from '@material-ui/core';

type PropsType = {
    userStatus: string | null
    updateStatus: (status: string | null) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = ({userStatus, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(userStatus);
    
    useEffect( () => {setStatus(userStatus)}, [userStatus] );

    const activateStatusEditor = () => {
        setEditMode(true);
    }

    const deactivateStatusEditor = () => {
        setEditMode(false);
        updateStatus(status);
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
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