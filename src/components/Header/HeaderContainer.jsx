import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authUser, logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount = () => {
        //thunkCreator for auth user
        //import from auth-redux
        this.props.authUser();
    }
    render = () => {
    return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        authData: state.authorization.data,
        isAuth: state.authorization.isAuth,
    }
}

export default connect(mapStateToProps, {authUser, logout})(HeaderContainer);