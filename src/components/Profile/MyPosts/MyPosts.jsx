import React from 'react';
import AddNewPost from './AddNewPost/AddNewPost.jsx';
import c from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {

  render = () =>{
  return (
    <div className={c.MyPosts}>
      <AddNewPost addNewPost={this.props.addNewPost} />
      <div className={c.posts}>
        { this.props.postData.map( p => <Post key={p.id} message={p.message} likeCounter={p.likeCounter} /> )}
      </div>
    </div>
  );
  }
}

export default MyPosts;