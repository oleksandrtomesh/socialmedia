import React from 'react';
import AddNewPost from './AddNewPost/AddNewPost';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {addNewPost} from '../../../redux/profile-reducer'
import { useDispatch, useSelector } from 'react-redux';
import { getPostData } from '../../../redux/selectors/profileSelectors';
import { Grid, Paper } from '@material-ui/core';

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
    return <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper square>
            <AddNewPost addNewPost={addPost} />
            </Paper>
          </Grid>
          <Grid item>
            {postData.map(p =><Paper key={p.message}>
                  <Post  message={p.message} likeCounter={p.likeCounter} />
                </Paper>)}
          </Grid>
        </Grid>;
  } else {
    return <div className={styles.post}>
        This user does not have posts yet
      </div>;
  }
};

export default MyPosts;