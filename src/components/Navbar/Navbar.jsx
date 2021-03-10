import { NavLink } from 'react-router-dom';
//import Friends from './Friends/Friends';
import c from './Navbar.module.css';

const Navbar = (props) => {
  
  //let friendItem = props.friendsItems.friendsItems.map(friendsItems => <Friends id={friendsItems.id} name={friendsItems.name} />)


  return (
    <div>
      <div className={c.nav}>
        <nav >
          <div>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/profile">Profile</NavLink>
          </div>
          <div>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/users">Users</NavLink>
          </div>
          <div>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/dialogs">Messages</NavLink>
          </div>
          <div>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/news">News</NavLink>
          </div>
          <div>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/music">Music</NavLink>
          </div>
          <div>
            <NavLink className={c.item} activeClassName={c.activeLink} to="/settings">Settings</NavLink>
          </div>
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