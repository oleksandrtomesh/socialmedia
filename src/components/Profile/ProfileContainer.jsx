import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';
import {
    setUserProfile,
    setStatus,
    updateStatus,
    saveUserPhoto,
    saveProfileInfo,
    isFetching
} from '../../redux/profile-reducer';
import Profile from './Profile';
import { compose } from 'redux';
import Loader from '../commonElements/loader/loader';



class ProfileContainer extends React.Component {
  
  refreshProfile(){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = this.props.authorizedUserId.id;
    }
    this.props.setUserProfile(userId);
    this.props.setStatus(userId);
  }

  componentDidMount (){
    this.refreshProfile()
  };

  componentDidUpdate(prevProps) {
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.refreshProfile();
    }
  }
d
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


let mapStateToProps = (state) => {
  return{
    userProfile: state.profilePage.userProfile,
    authUserId: state.authorization,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.authorization.data,
    isProfileFetching: state.profilePage.isFetching
  };
}


export default compose(
  connect(mapStateToProps,{setUserProfile, setStatus, updateStatus, saveUserPhoto, saveProfileInfo, isFetching}),

  withRouter,

  //This is a HOC what verify does user login, if not redirect to "/login"
  withAuthRedirect
)(ProfileContainer);