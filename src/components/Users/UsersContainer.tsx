import React from 'react'
import { connect, ConnectedProps } from 'react-redux';
import {
    userReducerActionsCreators,
    getUsers,
    toggleFollowingUser,
    handlePageChange
} from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../commonElements/loader/loader';
import { compose } from 'redux';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';
import { AppStateType } from '../../redux/redux-store';

type PropsFromRedux = ConnectedProps <typeof connector>

type PropsType = PropsFromRedux

class UsersPage extends React.Component<PropsType> {

    componentDidMount = () => {
        //get users for page 1
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    render = () => {
        
        return (
            <div>
                {this.props.isFetching 
                ? <Loader /> 
                : <Users 
                    {...this.props}
                    />}
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.authorization.isAuth
    };
};

const selectPage = userReducerActionsCreators.selectPage

const connector = connect (mapStateToProps, { selectPage, getUsers, toggleFollowingUser, handlePageChange})

export default compose(
    connector,
    withAuthRedirect
)(UsersPage);