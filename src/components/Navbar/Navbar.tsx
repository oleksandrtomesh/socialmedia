
import React from 'react';
import { NavLink } from 'react-router-dom';
//import Friends from './Friends/Friends';
import c from './Navbar.module.css';
import { NavbarTypography } from './NavbarTypography';



const Navbar: React.FC = (props) => {
  //const friendsItems = useSelector(getFriendsItems)

  ////let friendItem = friendsItems.map(friendsItems => <Friends id={friendsItems.id} name={friendsItems.name} />)


  return (
    <div>
      <div className={c.nav}>
        <nav >
            <NavLink className={c.item} activeClassName={c.activeLink} to="/profile">
              <NavbarTypography>
                Profile
              </NavbarTypography>
            </NavLink>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/users">
              <NavbarTypography>
                Users
              </NavbarTypography>
            </NavLink>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/dialogs">
              <NavbarTypography>
                Messages
              </NavbarTypography>
            </NavLink>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/chat">
              <NavbarTypography>
                Chat
              </NavbarTypography>
            </NavLink>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/news">
              <NavbarTypography>
                News
              </NavbarTypography>
            </NavLink>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/music">
              <NavbarTypography>
                Music
              </NavbarTypography>
            </NavLink>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/settings">
              <NavbarTypography>
                Settings
              </NavbarTypography>
            </NavLink>
        </nav>
      </div>
      {/* <div className={c.friendsItems}>
        <h3>Friends</h3>
        <div className={c.friends}>
          {friendItem}
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;