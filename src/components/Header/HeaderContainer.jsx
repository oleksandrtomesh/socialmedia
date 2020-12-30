import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import axios from 'axios';
import { addAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    
    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            //withCredentials oznaczasje, szczo my prirypliajemo cookies do naszogo zapytu na server
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                this.props.addAuthUserData(id, login, email);
            }
        })
    }
    render = () => {
    return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        authData: state.authorization.data,
        isAuth: state.authorization.isAuth
    }
}

export default connect(mapStateToProps, {addAuthUserData})(HeaderContainer);