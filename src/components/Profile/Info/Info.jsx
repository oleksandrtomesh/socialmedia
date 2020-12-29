import styles from './Info.module.css';
import yes from '../../../assets/images/button_ok.png';
import no from '../../../assets/images/button_no.png';

const Info = (props) => {
  return (
    <div className={styles.info}>
      <h1>{props.userProfile.fullName}</h1>
      <div>About me: {props.userProfile.aboutMe}</div>
      <div>Looking for job: {props.userProfile.lookingForJob ? "Yes" : "No"}</div>
      <div>{props.userProfile.lookingForJobDescription}</div>
      <div>Web-sites: {props.userProfile.contacts.vk} </div>
    </div>
  );
}

export default Info;