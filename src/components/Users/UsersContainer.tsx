import React from 'react'
import { connect, ConnectedProps } from 'react-redux';
import {
    userReducerActionsCreators,
    getUsersWithFilter,
    toggleFollowingUser,
    handlePageChange,
    FilterType
} from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../commonElements/loader/loader';
import { compose } from 'redux';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';
import { AppStateType } from '../../redux/redux-store';


class UsersPage extends React.Component<PropsType> {

    componentDidMount = () => {
        //get users for page 1
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    
    handleFilterSubmit = (filter: FilterType) => {
        this.props.getUsers(1, this.props.pageSize, filter)
    }

    render = () => {
        
        return (
            <div>
                {this.props.isFetching 
                ? <Loader /> 
                : <Users 
                    handleFilterSubmit={this.handleFilterSubmit}
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
        isAuth: state.authorization.isAuth,
        term: state.usersPage.filter.term
    };
};

const selectPage = userReducerActionsCreators.selectPage

const connector = connect (mapStateToProps, { selectPage, getUsers: getUsersWithFilter, toggleFollowingUser, handlePageChange})

export default compose(
    connector,
    withAuthRedirect
)(UsersPage) as React.ComponentType;

type PropsFromRedux = ConnectedProps <typeof connector>
type PropsType = PropsFromRedux