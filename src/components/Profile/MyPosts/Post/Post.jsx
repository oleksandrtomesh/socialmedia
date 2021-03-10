import c from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={c.item}>
        <div className={c.postInfo}>
          <img src="https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722" alt="postAvatar" />
          <div className={c.name}>
            <div>Oleksandr Tomesh</div>
            <div>04/12/2020</div>
          </div>
        </div>
        <div className={c.message}>
          {props.message}
        </div>
        <div className={c.like}>
          Like {props.likeCounter}
        </div>
      </div>
    </div>
  );
}

export default Post;