import c from './Profile.module.css';

const Profile = () => {
  return (
    <div className={c.content}>
      <div className={c.profile_layout_photo}>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="profile layout photo"></img>
      </div>
      <div className={c.profile_info}>
        <div className={c.profile_photo}>
          <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="profile photo"></img>
        </div>
        <div>
          My posts
      </div>
      </div>
      <div className={c.posts}>
        New post
        <div className={c.item}>
          post 1
        </div>
        <div className={c.item}>
          Post 2
        </div>
      </div>
      Main content
    </div>
  );
}

export default Profile;