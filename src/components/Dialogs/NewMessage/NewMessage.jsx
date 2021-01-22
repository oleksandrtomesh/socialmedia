import React from 'react';
import { Field, Form } from 'react-final-form';
import c from './NewMessages.module.css';

const NewMessages = (props) => {

    //Функція addNewMessage bere znaczenia z on submir w final react form. W on submit wono popadaje za dopomogoju 
    //handleSubmit
    let addNewMessage = (value) => {
        props.addMessage(value.message);
    };

    const required = v => {
        if (!v || v === '' ) {
            return "required"
        } 

        return null
        
    }


    return (
        <Form
            onSubmit={addNewMessage}

            render={({handleSubmit})=>(
                
                <form onSubmit={handleSubmit} className={c.addNewMessage}>

                    {/* В textarea ми додаемо за допомогою атрибуту ref посилання, яке записано у змінну refNewMessage*/}
                    <Field className={c.textarea} name="message" component="input" placeholder="Enter your message" validate={required}/>

                    {/* в button добавляємо атрибут onClick, який в свою чергу приймає функцію "addNewMessage",
                    котра визветься при тому як користувач нажме на кнопку "Send" */}
                    <button type="submit" >Send</button>
            
                </form>
                )
            }
        />
    )
}

export default NewMessages;