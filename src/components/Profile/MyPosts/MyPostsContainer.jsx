import React from 'react';
import { addPostActionCreator, updateTextAreaActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  
  let state = props.store.getState();

  //функція котра власне бере значення з state а саме state.profilePage.nePostText і додає до 
  //об'єкту state.profilePage.postData 
  let onAddPost = () => {
      //dispatch передаємо функцію action creator   
      // яка імпортується з файлу state.js
      //ця функцыя повертає об'єкт action 
      props.store.dispatch(addPostActionCreator());
  }

  //Атрибут onChange ловить спробу ввести якусь значення в textarea
  // і якщо така спроба відбулася, запускає, те що в {}б тобто нашу функцію
  //onPostChangeб а ця функція в фсою чергуб бере актуальне значення з  textarea
  //і передає у функці updateTextAreaб яка прийшла з файлу state.js

  let onPostChange = (text) => {
    let action = updateTextAreaActionCreator(text)
    props.store.dispatch(action);
  }

  
  return (
    <MyPosts 
    updateTextArea={onPostChange} 
    addPost={onAddPost} 
    postData={state.profilePage.postData} 
    newPostText={state.profilePage.newPostText} />
  );
}

export default MyPostsContainer;