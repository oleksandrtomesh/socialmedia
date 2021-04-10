import React from 'react';
import c from './AddNewPost.module.css';
import { Field, Form } from 'react-final-form';
import { maxLengthCreator} from '../../../../utilits/validators';
import { CustomButton, InputCustom } from '../../../commonElements/formComponent';

type AddNewPostType = {
  addNewPost: (newPostText: string) => void
}

const AddNewPost: React.FC<AddNewPostType> = ({addNewPost}) => {

  let addPost = (value: {newPostText: string}) => {
      addNewPost(value.newPostText);
      value.newPostText = "";
  }
    
  return (
  <div>
    <Form onSubmit={addPost}
      render={ ({handleSubmit}) => (
          <form onSubmit={handleSubmit} className={c.Textarea}>
            <div>
              <Field<string> className={c.inputField}
                name="newPostText" 
                component= {InputCustom} 
                label="Something new?"
                validate={maxLengthCreator(150)}
              />
            </div>
            <div>
              <CustomButton>Post</CustomButton>
            </div>
            
            
          </form>
        )
        }
    />
  </div> 
  );
}


export default AddNewPost;