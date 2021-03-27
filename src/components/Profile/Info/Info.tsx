import React from 'react';
import styles from './Info.module.css';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileInfoEditMode from './ProfileInfoEditMode';
import { useStyles } from '../../commonElements/formComponentCustomStyles';
import { Button } from '@material-ui/core';
import { Contacts, PhotosType} from '../../../types/types';

export type UserProfileType = {
  userId?: number 
  aboutMe?: string 
  lookingForAJob?: boolean
  lookingForAJobDescription?: string
  fullName?: string
  contacts: Contacts
  photos?: PhotosType | undefined
  
}

type PropsType = {
  userStatus: string
  userProfile: UserProfileType
  isOwner: boolean
  updateStatus: (status: string) => void
  saveProfileInfo: (userId:number) => void
}

const Info: React.FC<PropsType> = ({userStatus, updateStatus,saveProfileInfo, ...props}) => {

  const [editMode, setEditMode] = useState(false);


  return (
    <div>
      <ProfileStatusWithHooks userStatus={userStatus} updateStatus={updateStatus}/>
      {editMode 
        ? <ProfileInfoEditMode saveProfileInfo={saveProfileInfo} setEditMode={setEditMode} {...props} /> 
        : <ProfileInfo setEditMode={setEditMode} {...props} />}
    </div>
  );
}

type ProfileInfoPropsType = {
  userProfile: UserProfileType
  isOwner: boolean
  setEditMode: (mode: boolean) => void;
} 

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({setEditMode, userProfile,isOwner}) => {
  const classes = useStyles()
  const changeEditMode = () => {
    setEditMode(true);
  }

  return <div className={styles.info}>
    <h1>{userProfile.fullName}</h1>
    <div>
      {userProfile.aboutMe && <b>About me:</b>} {userProfile.aboutMe}
    </div>
    <div>
      <b>Looking for job: </b>{userProfile.lookingForAJob ? "Yes" : "No"}
    </div>
    <div>
      {userProfile.lookingForAJobDescription && <span><b>My professional skill:</b> {userProfile.lookingForAJobDescription}</span>}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(userProfile.contacts!).map(key => {


        
        return <Contact key={key} contactTitle={key} contactValue={userProfile.contacts[key]!} />
      })}
    </div>
    {isOwner && <Button onClick={changeEditMode} className={classes.LoginButton} variant="contained" type="submit">Edit Mode</Button> }
  </div>
}

type ContactPropsType ={
  contactTitle: string
  contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
  
  return <div>
    {contactValue && 
      <span><b>{contactTitle}:</b><a href={contactValue} target="_blank" rel="noreferrer" >{contactValue}</a>  </span> 
    } 
  </div>
  }

export default Info;