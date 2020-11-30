import Like from './Likes/Like';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={c.item}>
        <img src="https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722" alt="profile post image"/>
        <div>
        {props.message}
        </div>
      </div>
      <span className={c.like}>
      <Like />
      {props.likeCounter}
      </span>
    </div>
  );
}

export default Post;