import React, { ChangeEvent} from 'react'
import Loader from '../commonElements/loader/loader';
import Info from './Info/Info';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import c from './Profile.module.css';
import avatar from '../../assets/images/avatar.png';
import { UploadButton } from '../commonElements/formComponent';
import { UserProfileType} from '../../types/types';

type PropsType = {
  userProfile: UserProfileType |null
  isProfileFetching: boolean
  isOwner: boolean 
  userStatus: string | null
  saveUserPhoto: (photo: File) => void
  updateStatus: (status: string | null) => void
  saveProfileInfo: (profile: UserProfileType) => void
}


const Profile: React.FC<PropsType> = ({userProfile, isProfileFetching, isOwner, userStatus, 
                                        updateStatus, saveProfileInfo, saveUserPhoto}) => {

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