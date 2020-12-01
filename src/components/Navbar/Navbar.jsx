import c from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div>
        <a className={c.item} href="/profile">Profile</a>
      </div>
      <div>
        <a className={`${c.item} ${c.active}`} href="/dialogs">Messages</a>
      </div>
      <div>
        <a className={c.item} href="/news">News</a>
      </div>
      <div>
        <a className={c.item} href="/music">Music</a>
      </div>
      <div>
        <a className={c.item} href="/settings">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;