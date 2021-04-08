import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Navbar from './Navbar';

  let mapStateToProps = (state: AppStateType) =>{
    return {
      friendsItems: state.friendsItems
    }
  }

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;