import React from 'react';
import styles from './Info.module.css';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileInfoEditMode from './ProfileInfoEditMode';
import { useStyles } from '../../commonElements/formComponentCustomStyles';
import { Button, Typography } from '@material-ui/core';
import { UserProfileType} from '../../../types/types';

type PropsType = {
  userStatus: string | null
  userProfile: UserProfileType | null
  isOwner: boolean
  updateStatus: (status: string | null) => void
}

const Info: React.FC<PropsType> = ({userStatus, updateStatus, ...props}) => {

  const [editMode, setEditMode] = useState(false);


  return (
    <div>
      <ProfileStatusWithHooks userStatus={userStatus} updateStatus={updateStatus}/>
      {editMode 
        ? <ProfileInfoEditMode setEditMode={setEditMode} {...props} /> 
        : <ProfileInfo setEditMode={setEditMode} {...props} />}
    </div>
  );
}

type ProfileInfoPropsType = {
  userProfile: UserProfileType | null
  isOwner: boolean
  setEditMode: (mode: boolean) => void;
} 

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({setEditMode, userProfile,isOwner}) => {
  const classes = useStyles()
  const changeEditMode = () => {
    setEditMode(true);
  }
  if (userProfile != null) {
    return <div className={styles.info}>
      <Typography variant="h3">{userProfile.fullName}</Typography>
      <Typography variant="overline" component="div">
        {userProfile.aboutMe && <b>About me:</b>} {userProfile.aboutMe}
      </Typography>
      {/* <div>
        <b>Looking for job: </b>{userProfile.lookingForAJob ? "Yes" : "No"}
      </div> */}
      <Typography variant="overline" component="div">
        {userProfile.lookingForAJobDescription && <span><b>My professional skill:</b> {userProfile.lookingForAJobDescription}</span>}
      </Typography>
      <Typography variant="overline" component="div">
        <b>Contacts</b>: {Object.keys(userProfile.contacts!).map(key => {
          if(userProfile.contacts != null){
            return <Contact key={key} contactTitle={key} contactValue={userProfile.contacts[key]!} />
          }
          return null
        })}
      </Typography>
      {isOwner && <Button onClick={changeEditMode} className={classes.LoginButton} variant="contained" type="submit" fullWidth>Edit Mode</Button>}
    </div>
  }
  return null
}

type ContactPropsType ={
  contactTitle: string
  contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
  
  return <div>
    {contactValue && 
      <span><b>{contactTitle}: </b><a href={contactValue} target="_blank" rel="noreferrer" >{contactValue}</a>  </span> 
    } 
  </div>
  }

export default Info;