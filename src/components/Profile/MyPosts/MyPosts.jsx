import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1, message: "Hi, how are you?", likeCounter: 12},
    {id: 2, message: "It's my firs post", likeCounter: 13},
    {id: 3, message: "It's my second post", likeCounter: 14},
    {id: 4, message: "It's my third post", likeCounter: 15},
    {id: 5, message: "It's my fourth post", likeCounter: 16},
    {id: 6, message: "It's my fifth post", likeCounter: 17  }
  ]

  let postElemnts = postData.map( p => <Post message={p.message} likeCounter={p.likeCounter} /> )
  return (
    <div className={c.MyPosts}>
      <div className={c.Textarea}>
        <textarea name="NewPost" id="NewPost" cols="50" rows="3" placeholder="Something new?"></textarea>
        <button>Submit</button>
      </div>
      <div className={c.posts}>
        { postElemnts }
      </div>
    </div>
  );
}

export default MyPosts;