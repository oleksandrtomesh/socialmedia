import React from 'react';
import AddNewPost from './AddNewPost/AddNewPost';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {addNewPost} from '../../../redux/profile-reducer'
import { useDispatch, useSelector } from 'react-redux';
import { getPostData } from '../../../redux/selectors/profileSelectors';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  withoutPosts: {
    width: '100%',
    padding: '1rem',
    textAlign: 'center'
  }
})

const MyPosts: React.FC<MyPostsType> = ({isOwner}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const postData = useSelector(getPostData) 
  const addPost = (newPostText: string) => {
      let today: Date = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      let date = mm + '/' + dd + '/' + yyyy;
      dispatch(addNewPost(newPostText, date))
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
                  <Post  message={p.message} likeCounter={p.likeCounter} date={p.date} />
                </Paper>)}
          </Grid>
        </Grid>;
  } else {
    return <Paper square className={classes.withoutPosts}>
      <Typography variant='overline'>
        This user does not have posts yet
      </Typography>
    </Paper>
  }
};

export default MyPosts;

type MyPostsType = {
  isOwner: boolean  
}