import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import { UserProfileType } from '../../types/types';

class HeaderContainer extends React.Component<HeaderPropsType>{

    render = () => {
    return <Header {...this.props} />
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        userProfile: state.authorization.authUserProfile,
        isAuth: state.authorization.isAuth,
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType >(mapStateToProps, {logout})(HeaderContainer);

type MapStateToPropsType = {
    userProfile: UserProfileType | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    logout: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType