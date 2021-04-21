import React, { ChangeEvent } from 'react'
import Loader from '../commonElements/loader/loader';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import avatar from '../../assets/images/avatar.png';
import { UploadButton } from '../commonElements/formComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getIsProfileFetching, getUserProfile, getUserStatus } from '../../redux/selectors/profileSelectors';
import { saveUserPhoto, updateStatus } from '../../redux/profile-reducer';
import { Grid, Paper } from '@material-ui/core';

type PropsType = {
  isOwner: boolean
}


const Profile: React.FC<PropsType> = ({ isOwner }) => {

  const dispatch = useDispatch()

  const userProfile = useSelector(getUserProfile)
  const isProfileFetching = useSelector(getIsProfileFetching)
  const userStatus = useSelector(getUserStatus)

  const updateUserStatus = (status: string | null) => {
    dispatch(updateStatus(status))
  }

  const savePhoto = (photo: File) => {
    dispatch(saveUserPhoto(photo))
  }
  const selectedMainPhotoFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      savePhoto(event.target.files[0])
    }
  }

  if (!userProfile) {
    return (<Loader />)
  }

  return (

    <Grid container direction="column">
      <Paper square={true}>
        <Grid item container direction="row">
          <Grid item container direction="column" spacing={2} justify="flex-start" alignContent="center" xs={12} md={5}
            style={{ marginTop: "1rem" }}>
            <Grid item >
              {!isProfileFetching
                ? <img className={styles.img} src={userProfile.photos?.large !== null ? userProfile.photos?.large : avatar} alt="profile"></img>
                : <Loader />}
            </Grid>
            <Grid item>
              {isOwner && <UploadButton onChangeHandler={selectedMainPhotoFile} buttonAssign="Upload Profile Photo" />}
            </Grid>
          </Grid>
          <Grid item xs={12} md={7}>
            <Info
              userProfile={userProfile}
              userStatus={userStatus}
              updateStatus={updateUserStatus}
              isOwner={isOwner}
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid item container style={{ marginTop: 20 }}>
        <MyPosts isOwner={isOwner} />
      </Grid>
    </Grid>
    
  );
}

export default Profile;