import React from 'react';
import AddNewPost from './AddNewPost/AddNewPost';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {addNewPost} from '../../../redux/profile-reducer'
import { useDispatch, useSelector } from 'react-redux';
import { getPostData } from '../../../redux/selectors/profileSelectors';

type MyPostsType = {
  isOwner: boolean  
}
const MyPosts: React.FC<MyPostsType> = ({isOwner}) => {
  const dispatch = useDispatch()

  const postData = useSelector(getPostData) 
  const addPost = (newPostText: string) => {
    dispatch(addNewPost(newPostText))
  }

  if (isOwner === true) {
    return <div className={styles.MyPosts}>
          <div className={styles.addNewPost}>
            <AddNewPost addNewPost={addPost} />
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