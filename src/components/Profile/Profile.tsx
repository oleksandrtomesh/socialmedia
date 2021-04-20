import React, { ChangeEvent } from 'react'
import Loader from '../commonElements/loader/loader';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import avatar from '../../assets/images/avatar.png';
import { UploadButton } from '../commonElements/formComponent';
import { UserProfileType } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { getIsProfileFetching, getUserProfile, getUserStatus } from '../../redux/selectors/profileSelectors';
import { saveUserPhoto, updateStatus } from '../../redux/profile-reducer';
import { Grid as div, Grid, Paper } from '@material-ui/core';

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
<div style={{ padding: 8 }}>
    <Grid container direction="column" spacing={2}>
      <Paper square={true}>
        <Grid item container direction="row">
          <Grid item container direction="column" spacing={2} justify="flex-start" alignContent="center" xs={12} md={5}>
            <Grid item>
              {!isProfileFetching
                ? <img src={userProfile.photos?.large !== null ? userProfile.photos?.large : avatar} alt="profile" style={{marginTop: 15}}></img>
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
      
      <Grid item>
        <MyPosts isOwner={isOwner} />
      </Grid>
    </Grid>
    </div>
  );
}

export default Profile;