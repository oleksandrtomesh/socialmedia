import React from 'react';
import c from './AddNewPost.module.css';
import { Field, Form } from 'react-final-form';

const AddNewPost = (props) => {

  //функція котра власне бере значення з state а саме state.profilePage.nePostText і додає до 
  //об'єкту state.profilePage.postData 
  let addPost = (value) => {
      //beremo funkciju addPost z naszoi componenty containera
      props.addNewPost(value.newPostText);
      
  }
  
  const required = v => {
    if (!v || v === '' ) {
        return "required"
    } 

    return null
    
}
  
  return (
  <div className={c.Textarea}>
    <Form onSubmit={addPost}
      render={ ({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Field className={c.inputField} name="newPostText" component="input" placeholder="Something new?" validate={required}/>
            <button type="submit">Submit</button>
          </form>
        )
        }
    />
  </div> 
  );
}


export default AddNewPost;