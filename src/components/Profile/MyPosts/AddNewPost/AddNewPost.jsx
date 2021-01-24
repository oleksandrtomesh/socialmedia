import React from 'react';
import c from './AddNewPost.module.css';
import { Field, Form } from 'react-final-form';
import { maxLengthCreator, composeValidators, required } from '../../../../utilits/validators';
import { Textarea } from '../../../commonElements/formComponent';

const AddNewPost = (props) => {

  //функція котра власне бере значення з state а саме state.profilePage.nePostText і додає до 
  //об'єкту state.profilePage.postData 
  let addPost = (value) => {
      //beremo funkciju addPost z naszoi componenty containera
      props.addNewPost(value.newPostText);
      
  }
    
  return (
  <div className={c.Textarea}>
    <Form onSubmit={addPost}
      render={ ({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Field className={c.inputField} 
              name="newPostText" 
              component= {Textarea} 
              placeholder="Something new?" 
              validate={composeValidators(required, maxLengthCreator(30))}/>
            <button type="submit">Submit</button>
          </form>
        )
        }
    />
  </div> 
  );
}


export default AddNewPost;