import { setUserProfile } from '../../redux/profile-reducer';
import Login from './Login';
import { connect, ConnectedProps } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';


const mapStateToProps = (state: AppStateType)  => {
  return {
    isAuth: state.authorization.isAuth,
    captcha: state.authorization.captcha
  };
};

export type PropsFromRedux = ConnectedProps <typeof connector>

const connector = connect(mapStateToProps, {setUserProfile, login})

export default connector(Login);