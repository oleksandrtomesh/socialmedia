import React from 'react';
import { Field, Form } from 'react-final-form';
import { maxLengthCreator} from '../../../../utilits/validators';
import { CustomButton, InputCustom } from '../../../commonElements/formComponent';
import { Grid} from '@material-ui/core';

type AddNewPostType = {
  addNewPost: (newPostText: string) => void
}

const AddNewPost: React.FC<AddNewPostType> = ({addNewPost}) => {

  let addPost = (value: {newPostText: string}) => {
      addNewPost(value.newPostText);
      value.newPostText = "";
  }
    
  return (
  <div >
    <Form onSubmit={addPost}
      render={ ({handleSubmit}) => (
          <form onSubmit={handleSubmit} style={{padding:"15px"}}>
            <Grid container direction="row" spacing={2} >
            <Grid item xs={9}>
              <Field<string> 
                name="newPostText" 
                component= {InputCustom} 
                label="Something new?"
                validate={maxLengthCreator(150)}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomButton>Post</CustomButton>
            </Grid>
            </Grid>
            
          </form>
        )
        }
    />
  </div> 
  );
}


export default AddNewPost;