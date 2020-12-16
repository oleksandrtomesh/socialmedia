import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageAreaActionCreator } from '../../../redux/dialogs-reducer';
import NewMessages from './NewMessage';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
    addNewMessage: () => dispatch(addMessageActionCreator()),
    updateMassageArea : (text) => dispatch(updateMessageAreaActionCreator(text))
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessages);

export default NewMessageContainer;