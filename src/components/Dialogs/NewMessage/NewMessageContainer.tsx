import { connect, ConnectedProps } from 'react-redux';
import {
    addMessage
} from '../../../redux/dialogs-reducer';
import { AppStateType } from '../../../redux/redux-store';
import NewMessages from './NewMessage';

let mapStateToProps = (state: AppStateType) => {
    return {
        newMessageText: state.dialogPage.newMessageText
    }
}

const connector = connect(mapStateToProps, {addMessage})

const NewMessageContainer = connector(NewMessages);

export default NewMessageContainer;

export type NewMessagesPropsType = ConnectedProps<typeof connector>