import Loader from '../commonElements/loader/loader';
import Info from './Info/Info';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import c from './Profile.module.css';
import avatar from '../../assets/images/avatar.png';
import { Input } from '@material-ui/core';


const Profile = (props) => {

  const selectedMainPhotoFile = (event) => {
    if(event.target.files.length){

      props.saveUserPhoto(event.target.files[0]);
    }
    
  }

  if(!props.userProfile){
    return(<Loader />)
  }

  return (
    <div className={c.content}>
      <div className={c.profile_info}>
        <div className={c.profile_photo}>
          {!props.isProfileFetching 
            ? <img src={props.userProfile.photos.large !== null ? props.userProfile.photos.large : avatar } alt="profile"></img>
            : <Loader />}
          <div>
            { props.isOwner && <Input type="file" onChange={selectedMainPhotoFile} />}
          </div>
        </div>
        
        <Info 
          userProfile={props.userProfile}
          userStatus={props.userStatus}
          updateStatus={props.updateStatus}
          saveProfileInfo={props.saveProfileInfo}
          isOwner={props.isOwner}
        />
      </div>
      <MyPostsContainer isOwner={props.isOwner}/>
    </div>
  );
}

export default Profile;