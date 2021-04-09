import React from 'react';
import { Field, Form, } from 'react-final-form';
import c from './NewMessages.module.css';
import { InputCustom, CustomButton } from '../../commonElements/formComponent';
import {maxLengthCreator } from '../../../utilits/validators';
import { NewMessagesPropsType } from './NewMessageContainer';

const NewMessages: React.FC<NewMessagesPropsType> = (props) => {

    type ValueType = {
        message: string
    }
    let addNewMessage = (value: ValueType): void => {
        props.addMessage(value.message);
        value.message = "";

    };

    return (
        <Form
            onSubmit={addNewMessage}

            render={({handleSubmit})=>(
                
                <form onSubmit={handleSubmit} className={c.addNewMessage}>
                    <div>
                        <Field className={c.textarea} 
                            name="message" 
                            component={InputCustom} 
                            placeholder="Enter your message" 
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
    )
}

export default NewMessages;