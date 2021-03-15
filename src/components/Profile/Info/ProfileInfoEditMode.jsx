import {Form, Field} from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import {
    InputCustom,
    RadioCustom,
    CustomButton
} from '../../commonElements/formComponent';
import styles from './Info.module.css'
import {checkError} from "../../../utilits/validators"

const ProfileInfoEditMode = (props) => { 

    const saveProfile = async (values) => {
        const messages = await props.saveProfileInfo(values)
        if (messages !== undefined){
            return { [FORM_ERROR]: messages }
        } else {
            props.setEditMode(false)
        }
    }
    
    return <div className={styles.editMode}>
        <h4>Edit Mode</h4>
        <Form
            onSubmit={saveProfile}
            initialValues={props.userProfile}
            render={({handleSubmit, submitError}) => {
                return <form onSubmit={handleSubmit} className={styles.editModeForm}>
                    <div>
                        <Field name="fullName" component={InputCustom} label="Full Name"/> 
                    </div>
                    <div>
                        <Field name="aboutMe" component={InputCustom} label="About Me"/> 
                        {submitError && <div className={styles.error}>{checkError(submitError, "AboutMe")}</div>}
                    </div>
                    <div className={styles.lookingForAJob}>
                        <b>Looking for job: </b>
                            <Field name="lookingForAJob" component='input' type='checkbox'/>
                    </div>
                    <div>
                        <Field name="lookingForAJobDescription" label="My professional skill" component={InputCustom}/> 
                        {submitError && <div className={styles.error}>{checkError(submitError,"LookingForAJobDescription")}</div>}
                    </div>
                    <div>
                        <h5>Contacts:</h5> {Object.keys(props.userProfile.contacts).map(key => {
                            return <div key={key}>
                                    <Field  name={"contacts." + key} component={InputCustom} label={key} />
                                    {submitError && <div className={styles.error}>{checkError(submitError, key)}</div>}
                                </div>
                        })}
                    </div>
                    <CustomButton>Save</CustomButton> 
                </form>
                }
            }
        />
    </div>
}

export default ProfileInfoEditMode;