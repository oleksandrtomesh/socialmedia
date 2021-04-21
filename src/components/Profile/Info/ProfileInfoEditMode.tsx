import {Form, Field} from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import {
    InputCustom,
    CustomButton
} from '../../commonElements/formComponent';
import styles from './Info.module.css'
import {checkError} from "../../../utilits/validators"
import React from 'react';
import { UserProfileType } from '../../../types/types';
import { useDispatch } from 'react-redux';
import { saveProfileInfo } from '../../../redux/profile-reducer';
import { Typography } from '@material-ui/core';

type ProfileInfoEditModeType = {
    setEditMode: (mode: boolean) => void
    userProfile: UserProfileType | null
}


const ProfileInfoEditMode: React.FC<ProfileInfoEditModeType> = ({setEditMode, userProfile, ...props}) => { 

    const dispatch = useDispatch();

    const saveProfile = async (values: UserProfileType) => {
        const messages = await dispatch(saveProfileInfo(values))
        if (messages !== undefined){
            return { [FORM_ERROR]: messages }
        } else {
            setEditMode(false)
        }
    }
    
    return <div className={styles.editMode}>
        <Typography variant="h4">Edit Mode</Typography>
        <Form
            onSubmit={saveProfile}
            initialValues={userProfile}
            render={({handleSubmit, submitError}) => {
                return <form onSubmit={handleSubmit} className={styles.editModeForm}>
                    <div>
                        <Field name="fullName" component={InputCustom} label="Full Name"/> 
                    </div>
                    <div>
                        <Field name="aboutMe" component={InputCustom} label="About Me"/> 
                        {submitError && <div className={styles.error}>{checkError(submitError, "AboutMe")}</div>}
                    </div>
                    {/* <div className={styles.lookingForAJob}>
                        <b>Looking for job: </b>
                            <Field name="lookingForAJob" component='input' type='checkbox'/>
                    </div> */}
                    <div>
                        <Field name="lookingForAJobDescription" label="My professional skill" component={InputCustom}/> 
                        {submitError && <div className={styles.error}>{checkError(submitError,"LookingForAJobDescription")}</div>}
                    </div>
                    <div>
                        <Typography variant="h5">Contacts:</Typography> 
                            {userProfile != null && Object.keys(userProfile.contacts!).map(key => {
                                return <div key={key}>
                                        <Field  name={"contacts." + key} component={InputCustom} label={key} />
                                        {submitError && <div className={styles.error}>{checkError(submitError, key)}</div>}
                                    </div>}
                        )}
                    </div>
                    <CustomButton>Save</CustomButton> 
                </form>
                }
            }
        />
    </div>
}

export default ProfileInfoEditMode;