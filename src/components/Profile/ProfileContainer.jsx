import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';



class ProfileContainer extends React.Component {
  
  componentDidMount = () => {
    debugger;
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 13492;
    }
    this.props.setUserProfile(userId);
  };

  render = () => {return <Profile {...this.props} />};
}

//pisla obertania withRedirect obertaju ProfileContainer szcze odnoju containernoju komponentoju, jaka prokyduje
//w Profile container dani z URL
let withUserIdProfileContainer = withRouter(ProfileContainer);

//obertaju Componentu withAuthRedirect Hight Order Component, kotra powertaje w 
//URL /login, jakszczo korystuwach ne zalogowanyj, tym samy my ne moerzemo distatysia
//do kontentu, jakszo my ne zalogowani (isAuth = false)
let withRedirectComponent = withAuthRedirect(withUserIdProfileContainer);

//w mapStateToProps zakydaju z state dani profile zagrueni z servera
let mapStateToProps = (state) => {
  return{
    userProfile: state.profilePage.userProfile,
    authUserId: state.authorization
  };
}

export default connect(mapStateToProps,{setUserProfile})(withRedirectComponent);