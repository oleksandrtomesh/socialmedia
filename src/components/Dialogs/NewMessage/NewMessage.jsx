import React from 'react';
import { Field, Form } from 'react-final-form';
import c from './NewMessages.module.css';
import { Input } from '../../commonElements/formComponent';
import { composeValidators, required, maxLengthCreator } from '../../../utilits/validators';

const NewMessages = (props) => {

    //Функція addNewMessage bere znaczenia z on submir w final react form. W on submit wono popadaje za dopomogoju 
    //handleSubmit
    let addNewMessage = (value) => {
        props.addMessage(value.message);
    };

    return (
        <Form
            onSubmit={addNewMessage}

            render={({handleSubmit})=>(
                
                <form onSubmit={handleSubmit} className={c.addNewMessage}>
                    <Field className={c.textarea} 
                        name="message" 
                        component={Input} 
                        placeholder="Enter your message" 
                        validate={composeValidators(required, maxLengthCreator(30))}
                    />
                    <button type="submit" >Send</button>
                </form>
                )
            }
        />
    )
}

export default NewMessages;