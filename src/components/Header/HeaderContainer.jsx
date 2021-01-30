import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, {logout})(HeaderContainer);