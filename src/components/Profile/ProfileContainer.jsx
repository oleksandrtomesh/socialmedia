import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';



class ProfileContainer extends React.Component {
  
  componentDidMount = () => {
    debugger;
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 13492;
      debugger;
    }
    this.props.setUserProfile(userId);
  };

  render = () => {return <Profile {...this.props} />};
}

//obertaju ProfileContainer szcze odnoju containernoju komponentoju, jaka prokyduje
//w Profile container dani z URL
let withUserIdProfileContainer = withRouter(ProfileContainer);

//w mapStateToProps zakydaju z state dani profile zagrueni z servera
let mapStateToProps = (state) => {
  return{
    userProfile: state.profilePage.userProfile,
    isAuth: state.authorization.isAuth,
    authUserId: state.authorization
  };
}

export default connect(mapStateToProps,{setUserProfile})(withUserIdProfileContainer);