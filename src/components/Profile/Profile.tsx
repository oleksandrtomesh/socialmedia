import React, { ChangeEvent} from 'react'
import Loader from '../commonElements/loader/loader';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import avatar from '../../assets/images/avatar.png';
import { UploadButton } from '../commonElements/formComponent';
import { UserProfileType} from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { getIsProfileFetching, getUserProfile, getUserStatus } from '../../redux/selectors/profileSelectors';
import { saveProfileInfo, saveUserPhoto, updateStatus } from '../../redux/profile-reducer';

type PropsType = {
  isOwner: boolean 
}


const Profile: React.FC<PropsType> = ({isOwner}) => {

  const dispatch = useDispatch()

  const userProfile = useSelector(getUserProfile)
  const isProfileFetching = useSelector(getIsProfileFetching)
  const userStatus = useSelector(getUserStatus)

  const updateUserStatus = (status: string | null) => {
    dispatch(updateStatus(status))
  }
  const saveUserProfileInfo = (profile: UserProfileType) => {
    dispatch(saveProfileInfo(profile))
  }
  const savePhoto = (photo: File) => {
    dispatch(saveUserPhoto(photo))
  }
  const selectedMainPhotoFile = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files?.length){
      savePhoto(event.target.files[0])
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
          updateStatus={updateUserStatus}
          saveProfileInfo={saveUserProfileInfo}
          isOwner={isOwner}
        />
      </div>
      <MyPosts isOwner={isOwner}/>
    </div>
  );
}

export default Profile;