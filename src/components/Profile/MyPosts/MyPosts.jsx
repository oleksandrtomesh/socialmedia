import React from 'react';
import AddNewPost from './AddNewPost/AddNewPost.jsx';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  if (props.isOwner === true) {
    return <div className={styles.MyPosts}>
          <div className={styles.addNewPost}>
            <AddNewPost addNewPost={props.addNewPost} />
          </div>
          <div className={styles.posts}>
            {props.postData.map(p => <Post key={p.message} message={p.message} likeCounter={p.likeCounter} />)}
          </div>
        </div>;
  } else {
    return <div className={styles.post}>
        This user does not have posts yet
      </div>;
  }
};

export default MyPosts;