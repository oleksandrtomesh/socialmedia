import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
      let text = newPostElement.current.value;
      return alert(text);
  }

  let postElemnts = props.postData.map( p => <Post message={p.message} likeCounter={p.likeCounter} /> )
  
  return (
    <div className={c.MyPosts}>
      <div className={c.Textarea}>
        <textarea ref={newPostElement} name="NewPost" id="NewPost" cols="50" rows="3" placeholder="Something new?"></textarea>
        <button onClick={addPost}>Submit</button>
      </div>
      <div className={c.posts}>
        { postElemnts }
      </div>
    </div>
  );
}

export default MyPosts;