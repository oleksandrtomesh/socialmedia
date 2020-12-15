import React from 'react';
import { addMessageActionCreator, updateMessageAreaActionCreator } from '../../../redux/dialogs-reducer';
import NewMessages from './NewMessage';


const NewMessageContainer = (props) => {

    let state = props.store.getState();

    // створюємо ссилку зміну під назвою ferNewMessage і поміщаємо цю ссилку в textarea.
    //тобто тепер за допомогою зміної refNewMessage ми зсилаємося на текстареа і можемо
    //так перевіряти дані в текстареа
    let refNewMessage = React.createRef();

    //Функція addNewMessage берез значення з посилання refNewMessageб тобто з нашої textarea
    let addNewMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    //функцію updateMassageArea визиває textarea коли в ній відбувається подія 
    //зміни onChange і тим самим textarea перелає в функцію об'єкт події (яка називається event)
    //і за допомогою event ми можемомо дістатися об'кта
    //в якому відбулася зміна в нашому випадку це textarea
    let updateMassageArea = (text) => {
        //тобто в ми беремо значення в textarea за допомогою target
        //event - це дія котра відбулася в textarea
        //event.target - вказує де саме відбулася дія (тут це textarea)
        //event.target.value; - бере значення в об'єкті де відбулася дія
        props.store.dispatch(updateMessageAreaActionCreator(text));
    }
    

    return (
        <NewMessages addNewMessage={addNewMessage} updateMassageArea={updateMassageArea} newMessageText={state.dialogPage.newMessageText} />
    )
}

export default NewMessageContainer;