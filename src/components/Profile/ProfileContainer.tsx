import React from 'react';
import { connect, ConnectedProps} from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';
import {
    setUserProfile,
    setStatus,
    updateStatus,
    saveUserPhoto,
    saveProfileInfo,
} from '../../redux/profile-reducer';
import Profile from './Profile';
import { compose } from 'redux';
import Loader from '../commonElements/loader/loader';
import {AppStateType} from '../../redux/redux-store'


class ProfileContainer extends React.Component<ProfilePropsType> {
  
  refreshProfile(){
    let userId: number | null = parseInt(this.props.match.params.userId);
    if(!userId && this.props.authorizedUserId != null){
      userId = this.props.authorizedUserId.id;
    }
    this.props.setUserProfile(userId);
    this.props.setStatus(userId);
  }

  componentDidMount (){
    this.refreshProfile()
  };

  componentDidUpdate(prevProps: ProfilePropsType) {
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.refreshProfile();
    }
  }
  render = () => { 
    return (
      <div>
        {this.props.isProfileFetching
          ?<Loader/>
          :<Profile isOwner={!this.props.match.params.userId} {...this.props} />
        }
      </div>
        )};
}


let mapStateToProps = (state: AppStateType) => {
  return{
    userProfile: state.profilePage.userProfile,
    authUserId: state.authorization,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.authorization.data,
    isProfileFetching: state.profilePage.isFetching
  };
}

const connector = connect(mapStateToProps,{setUserProfile, setStatus, updateStatus, saveUserPhoto, saveProfileInfo});

export default compose(
  connector,
  withRouter,  
  withAuthRedirect //This is a HOC what verify does user authorised, if not redirect to "/login"
)(ProfileContainer);


type PathParamTypes = {
  userId: string
}

export type ProfilePropsType = ConnectedProps <typeof connector> & RouteComponentProps<PathParamTypes>