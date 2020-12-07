import React from 'react';
import c from './NewMessages.module.css';

const NewMessages = (props) => {
    // створюємо ссилку зміну під назвою ferNewMessage і поміщаємо цю ссилку в textarea.
    //тобто тепер за допомогою зміної refNewMessage ми зсилаємося на текстареа і можемо
    //так перевіряти дані в текстареа
    let refNewMessage = React.createRef();

    //Функція addNewMessage берез значення з посилання refNewMessageб тобто з нашої textarea
    let addNewMessage = () => {
        let text = refNewMessage.current.value;
        alert(text);
    }
    

    return (
        <div className={c.addNewMessage}>

            {/* В textarea ми додаемо за допомогою атрибуту ref посилання, яке записано у змінну refNewMessage*/}
            <textarea ref={refNewMessage} name="newMessage" id="newMessage" cols="30" rows="10"></textarea>

            {/* в button добавляємо атрибут onClick, який в свою чергу приймає функцію "addNewMessage",
            котра визветься при тому як користувач нажме на кнопку "Send" */}
            <button onClick={addNewMessage} >Send</button>
        </div>
    )
}

export default NewMessages;