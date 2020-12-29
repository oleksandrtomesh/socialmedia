import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';



class ProfileContainer extends React.Component {

  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {this.props.setUserProfile(response.data)})
  };

  render = () => {return <Profile {...this.props} />};
}

//obertaju ProfileContainer szcze odnoju containernoju komponentoju, jaka prokyduje
//w Profile container dani z URL
let wuthUserIdProfileContainer = withRouter(ProfileContainer);

//w mapStateToProps zakydaju z state dani profile zagrueni z servera
let mapStateToProps = (state) => ({userProfile: state.profilePage.userProfile});
export default connect(mapStateToProps,{setUserProfile})(wuthUserIdProfileContainer);