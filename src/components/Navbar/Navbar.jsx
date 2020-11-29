import c from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div>
        <a className={c.item} href="#">Profile</a>
      </div>
      <div>
        <a className={`${c.item} ${c.active}`} href="#">Messages</a>
      </div>
      <div>
        <a className={c.item} href="#">News</a>
      </div>
      <div>
        <a className={c.item} href="#">Music</a>
      </div>
      <div>
        <a className={c.item} href="#">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;