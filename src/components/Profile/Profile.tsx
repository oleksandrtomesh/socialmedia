import React, { ChangeEvent} from 'react'
import Loader from '../commonElements/loader/loader';
import Info from './Info/Info';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import c from './Profile.module.css';
import avatar from '../../assets/images/avatar.png';
import { UploadButton } from '../commonElements/formComponent';
import { Contacts, PhotosType} from '../../types/types';

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
  userProfile: UserProfileType
  isProfileFetching: boolean
  isOwner: boolean 
  userStatus: string
  saveUserPhoto: (photo: File) => void
  updateStatus: (status: string) => void
  saveProfileInfo: (userId:number) => void
}


const Profile: React.FC<PropsType> = ({userProfile, isProfileFetching, isOwner, userStatus, 
                                        updateStatus, saveProfileInfo, saveUserPhoto, ...props}) => {

  const selectedMainPhotoFile = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files?.length){
      saveUserPhoto(event.target.files[0]);
    }
    
  }

  if(!userProfile){
    return(<Loader />)
  }

  return (<div className={c.content}>
      <div className={c.profile_info}>
        <div className={c.profile_photo}>
          {!isProfileFetching 
            ? <img src={userProfile.photos?.large !== null ? userProfile.photos?.large : avatar } alt="profile"></img>
            : <Loader />}
          <div className={c.uploadButton}>
            {isOwner && <UploadButton onChangeHandler={selectedMainPhotoFile} buttonAssign="Upload Profile Photo"/>}
          </div>
        </div>
        
        <Info 
          userProfile={userProfile}
          userStatus={userStatus}
          updateStatus={updateStatus}
          saveProfileInfo={saveProfileInfo}
          isOwner={isOwner}
        />
      </div>
      <MyPostsContainer isOwner={isOwner}/>
    </div>
  );
}

export default Profile;