import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect} from 'react-redux';
import { AppStateType } from '../redux/redux-store';

//state for HOC withAuthRedirect
let mapStateToPropsForRedirect = (state: AppStateType) =>{
    return {
        isAuth: state.authorization.isAuth
    }
}

type MSTPtype = {
    isAuth: boolean
}


const withAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {

    class RedirectComponent extends React.Component<MSTPtype>{
        render(){
            const {isAuth, ...props} = this.props
            return !isAuth ? <Redirect to="/login"/>: <Component {...props as P} />
        }
    }
    
    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    //return component already with redirect
    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;