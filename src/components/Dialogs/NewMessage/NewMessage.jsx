import React from 'react';
import { addMessageActionCreator, updateMessageAreaActionCreator } from '../../../redux/dialogs-reducer';
import c from './NewMessages.module.css';

const NewMessages = (props) => {
    // створюємо ссилку зміну під назвою ferNewMessage і поміщаємо цю ссилку в textarea.
    //тобто тепер за допомогою зміної refNewMessage ми зсилаємося на текстареа і можемо
    //так перевіряти дані в текстареа
    let refNewMessage = React.createRef();

    //Функція addNewMessage берез значення з посилання refNewMessageб тобто з нашої textarea
    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    //функцію updateMassageArea визиває textarea коли в ній відбувається подія 
    //зміни onChange і тим самим textarea перелає в функцію об'єкт події (яка називається event)
    //і за допомогою event ми можемомо дістатися об'кта
    //в якому відбулася зміна в нашому випадку це textarea
    let updateMassageArea = (event) => {
        //тобто в ми беремо значення в textarea за допомогою target
        //event - це дія котра відбулася в textarea
        //event.target - вказує де саме відбулася дія (тут це textarea)
        //event.target.value; - бере значення в об'єкті де відбулася дія
        let text = event.target.value;
        props.dispatch(updateMessageAreaActionCreator(text));
    }
    

    return (
        <div className={c.addNewMessage}>

            {/* В textarea ми додаемо за допомогою атрибуту ref посилання, яке записано у змінну refNewMessage*/}
            <textarea onChange={updateMassageArea} ref={refNewMessage} placeholder="Enter your message" value={props.newMessageText}></textarea>

            {/* в button добавляємо атрибут onClick, який в свою чергу приймає функцію "addNewMessage",
            котра визветься при тому як користувач нажме на кнопку "Send" */}
            <button onClick={addNewMessage} >Send</button>
        </div>
    )
}

export default NewMessages;