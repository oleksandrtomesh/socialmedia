import { setUserProfile } from '../../redux/profile-reducer';
import Login from './Login';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';


const mapStateToProps = (state) => {
  return {
    isAuth: state.authorization.isAuth
  };
};

export default connect(mapStateToProps, {setUserProfile, login}) (Login);