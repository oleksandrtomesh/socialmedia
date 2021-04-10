import React from 'react';
import AddNewPost from './AddNewPost/AddNewPost';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {PostDataType} from '../../../redux/profile-reducer'

type MyPostsType = {
  isOwner: boolean
  postData: Array<PostDataType>
  addNewPost: (newPostText: string) => void
  
}
const MyPosts: React.FC<MyPostsType> = ({isOwner, postData, addNewPost}) => {
  if (isOwner === true) {
    return <div className={styles.MyPosts}>
          <div className={styles.addNewPost}>
            <AddNewPost addNewPost={addNewPost} />
          </div>
          <div className={styles.posts}>
            {postData.map(p => <Post key={p.message} message={p.message} likeCounter={p.likeCounter} />)}
          </div>
        </div>;
  } else {
    return <div className={styles.post}>
        This user does not have posts yet
      </div>;
  }
};

export default MyPosts;