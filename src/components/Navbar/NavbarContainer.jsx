import { connect } from 'react-redux';
import Navbar from './Navbar';

  let mapStateToProps = (state) =>{
    return {
      friendsItems: state.friendsItems
    }
  }

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;