import { connect } from 'react-redux';
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;