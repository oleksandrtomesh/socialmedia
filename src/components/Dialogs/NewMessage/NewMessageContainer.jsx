import { connect } from 'react-redux';
import {
    addMessage
} from '../../../redux/dialogs-reducer';
import NewMessages from './NewMessage';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogPage.newMessageText
    }
}

const NewMessageContainer = connect(mapStateToProps, {addMessage})(NewMessages);

export default NewMessageContainer;