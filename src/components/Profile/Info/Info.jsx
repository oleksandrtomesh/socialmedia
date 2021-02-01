import styles from './Info.module.css';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';

const Info = (props) => {
  return (
    <div>
      <ProfileStatusWithHooks userStatus={props.userStatus} updateStatus={props.updateStatus}/>
      <div className={styles.info}>
        <h1>{props.userProfile.fullName}</h1>
        <div>About me: {props.userProfile.aboutMe}</div>
        <div>Looking for job: {props.userProfile.lookingForJob ? "Yes" : "No"}</div>
        <div>{props.userProfile.lookingForJobDescription}</div>
        <div>Web-sites: {props.userProfile.contacts.vk} </div>
      </div>
    </div>
  );
}

export default Info;