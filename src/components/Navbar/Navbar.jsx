import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div>
        <NavLink className={c.item} activeClassName={c.activeLink} to="/profile">Profile</NavLink>
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
  );
}

export default Navbar;