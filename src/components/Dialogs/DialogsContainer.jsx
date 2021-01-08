import { connect } from 'react-redux';
import Dialogs from './Dialogs'
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';

//HOC component to redirect if !isAuth
let RedirectComponent = withAuthRedirect(Dialogs)

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

const DialogsContainer = connect(mapStateToProps)(RedirectComponent);

export default DialogsContainer;