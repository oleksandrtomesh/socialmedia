import React from 'react';
import { addPostActionCreator, updateTextAreaActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../store-context';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = updateTextAreaActionCreator(text)
          store.dispatch(action);
        }


        return (
          <MyPosts
            updateTextArea={onPostChange}
            addPost={onAddPost}
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText} />
        );
      }
    }
  </StoreContext.Consumer>
}

export default MyPostsContainer;