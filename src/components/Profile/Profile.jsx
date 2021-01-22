import Loader from '../commonElements/loader/loader';
import Info from './Info/Info';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import c from './Profile.module.css';
import avatar from '../../assets/images/avatar.png';


const Profile = (props) => {
  if(!props.userProfile){
    return(<Loader />)
  }

  return (
    <div className={c.content}>
      <div className={c.profile_layout_photo}>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="profile layout"></img>
      </div>
      <div className={c.profile_info}>
        <div className={c.profile_photo}>
          <img src={props.userProfile.photos.large !== null ? props.userProfile.photos.large : avatar } alt="profile"></img>
        </div>
        <Info userProfile={props.userProfile} userStatus={props.userStatus} updateStatus={props.updateStatus}/>
      </div>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;