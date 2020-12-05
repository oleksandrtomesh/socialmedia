import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1, message: "Hi, how are you?", likeCounter: 12},
    {id: 2, message: "It's my firs post", likeCounter: 13}
  ]
  return (
    <div className={c.MyPosts}>
      <div className={c.Textarea}>
        <textarea name="NewPost" id="NewPost" cols="50" rows="3" placeholder="Something new?"></textarea>
        <button>Submit</button>
      </div>
      <div className={c.posts}>
        <Post message={postData[0].message} likeCounter={postData[0].likeCounter} />
        <Post message={postData[1].message} likeCounter={postData[1].likeCounter} />
      </div>
    </div>
  );
}

export default MyPosts;