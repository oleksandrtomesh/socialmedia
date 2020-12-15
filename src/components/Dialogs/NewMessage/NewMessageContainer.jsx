import React from 'react';
import { addMessageActionCreator, updateMessageAreaActionCreator } from '../../../redux/dialogs-reducer';
import StoreContext from '../../../store-context';
import NewMessages from './NewMessage';


const NewMessageContainer = (props) => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();

            let addNewMessage = () => {
                store.dispatch(addMessageActionCreator());
            };

            let updateMassageArea = (text) => {
                store.dispatch(updateMessageAreaActionCreator(text));
            }

            return (
                <NewMessages addNewMessage={addNewMessage} updateMassageArea={updateMassageArea} newMessageText={state.dialogPage.newMessageText} />
            )
        }
        }
    </StoreContext.Consumer>
}

export default NewMessageContainer;