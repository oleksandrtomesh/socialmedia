import {Form, Field} from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import {Textarea, InputCustom } from '../../commonElements/formComponent';
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
    
    return <div>
        EditMode
        <Form
            onSubmit={saveProfile}
            initialValues={props.userProfile}
            render={({handleSubmit, submitError}) => {
                return <form onSubmit={handleSubmit}>
                    <div>
                        <b>Full name: </b><Field name="fullName" component={InputCustom} />
                    </div>
                    <div>
                        <b>About me: </b><Field name="aboutMe" component={Textarea} />
                        {submitError && <div className={styles.error}>{checkError(submitError, "AboutMe")}</div>}
                    </div>
                    <div>
                        <b>Looking for job: </b><Field name="lookingForAJob" component="select">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </Field>
                    </div>
                    <div>
                        <b>My professional skill</b><Field name="lookingForAJobDescription" component={Textarea} />
                        {submitError && <div className={styles.error}>{checkError(submitError,"LookingForAJobDescription")}</div>}
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(props.userProfile.contacts).map(key => {
                            return <div>
                                    <b>{key}: </b>
                                    <Field key={key} name={"contacts." + key} component={InputCustom} placeholder={key} />
                                    {submitError && <div className={styles.error}>{checkError(submitError, key)}</div>}
                                </div>
                        })}
                    </div>
                    <button>Save</button> 
                </form>
                }
            }
        />
    </div>
}

export default ProfileInfoEditMode;