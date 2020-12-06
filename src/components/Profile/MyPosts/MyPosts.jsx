import { postData } from '../Profile';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {



  let postElemnts = props.postData.map( p => <Post message={p.message} likeCounter={p.likeCounter} /> )
  
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