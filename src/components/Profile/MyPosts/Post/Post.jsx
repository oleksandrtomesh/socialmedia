import c from './Post.module.css';

const Post = () => {
  return (
    <div>
      <div className={c.item}>
        <img src="https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722" />
        <div>post 1</div>
      </div>
    </div>
  );
}

export default Post;