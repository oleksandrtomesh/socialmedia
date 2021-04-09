import { connect, ConnectedProps } from 'react-redux';
import Dialogs from './Dialogs'
import { compose } from 'redux';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';
import { AppStateType } from '../../redux/redux-store';
import { ComponentType } from 'react';


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage
    }
}

const connector = connect(mapStateToProps)

export default compose<ComponentType<DialogsPropsType>> (
    connector,

    //HOC component to redirect if user not authorised
    withAuthRedirect
)(Dialogs) as React.ComponentType;

export type DialogsPropsType = ConnectedProps<typeof connector>