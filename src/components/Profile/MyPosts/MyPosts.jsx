import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={c.MyPosts}>
        <div>
          My posts
        </div>
        <div className={c.posts}>
          New post
          <Post />
          <Post />
        </div>
        Main content
    </div>
  );
}

export default MyPosts;