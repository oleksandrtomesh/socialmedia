import React from 'react';
import c from './AddNewPost.module.css';
import { Field, Form } from 'react-final-form';
import { maxLengthCreator} from '../../../../utilits/validators';
import { CustomButton, InputCustom } from '../../../commonElements/formComponent';

const AddNewPost = (props) => {

  let addPost = (value) => {
      props.addNewPost(value.newPostText);
      value.newPostText = "";
  }
    
  return (
  <div>
    <Form onSubmit={addPost}
      render={ ({handleSubmit}) => (
          <form onSubmit={handleSubmit} className={c.Textarea}>
            <div>
              <Field  className={c.inputField}
              name="newPostText" 
              component= {InputCustom} 
              label="Something new?"
              validate={maxLengthCreator(150)}/>
            </div>
            <div>
              <CustomButton type="submit">Post</CustomButton>
            </div>
            
            
          </form>
        )
        }
    />
  </div> 
  );
}


export default AddNewPost;