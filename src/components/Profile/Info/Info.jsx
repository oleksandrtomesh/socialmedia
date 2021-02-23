import styles from './Info.module.css';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileInfoEditMode from './ProfileInfoEditMode';

const Info = (props) => {

  const [editMode, setEditMode] = useState(false);


  return (
    <div>
      <ProfileStatusWithHooks userStatus={props.userStatus} updateStatus={props.updateStatus}/>
      {editMode 
        ? <ProfileInfoEditMode saveProfileInfo={props.saveProfileInfo} setEditMode={setEditMode} {...props} /> 
        : <ProfileInfo setEditMode={setEditMode} {...props} />}
    </div>
  );
}

const ProfileInfo = (props) => {

  const changeEditMode = () => {
    props.setEditMode(true);
  }
  debugger;

  return <div>
    <div className={styles.info}>
        <h1>{props.userProfile.fullName}</h1>
        <div>
          {props.userProfile.aboutMe && <b>About me:</b>} {props.userProfile.aboutMe}
        </div>
        <div>
          <b>Looking for job: </b>{props.userProfile.lookingForAJob ? "Yes" : "No"}
        </div>
        <div>
          {props.userProfile.lookingForAJobDescription && <span><b>My professional skill:</b> {props.userProfile.lookingForAJobDescription}</span>}
        </div>
        <div> 
          <b>Contacts</b>: {Object.keys(props.userProfile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.userProfile.contacts[key]} />
          }) }
        </div>
      </div>
      {props.isOwner && <button onClick={changeEditMode}>Edit Profile</button>}
  </div>

}


const Contact = ({contactTitle, contactValue}) => {
  
  return <div>
    {contactValue && 
      <span><b>{contactTitle}:</b><a href={contactValue} target="_blank">{contactValue}</a>  </span> 
    } 
  </div>
  }

export default Info;