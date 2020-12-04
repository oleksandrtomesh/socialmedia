import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={c.MyPosts}>
      <div className={c.Textarea}>
        <textarea name="NewPost" id="NewPost" cols="50" rows="3" placeholder="Something new?"></textarea>
        <button>Submit</button>
      </div>
      <div className={c.posts}>
        <Post message="Hi, how are you?" likeCounter="5" />
        <Post message="It's my firs post" likeCounter="10" />
      </div>
    </div>
  );
}

export default MyPosts;