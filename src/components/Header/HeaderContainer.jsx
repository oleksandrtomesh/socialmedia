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
        userProfile: state.profilePage.userProfile,

        isAuth: state.authorization.isAuth,
        authUserId: state.authorization
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);