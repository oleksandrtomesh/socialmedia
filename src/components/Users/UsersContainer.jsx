import React from 'react'
import { connect } from 'react-redux';
import { followedAC, selectPageAC, setTotalCountAC, setUsersAC, toggleIsFetchingAC, unfollowedAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Loader from '../commonElements/loader/loader';

class UsersPage extends React.Component {

    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            if (response.data.totalCount < 100){        
                this.props.setTotalCount(response.data.totalCount);
            } else {
                this.props.setTotalCount(100);
            }
        });
    }

    //tse obrobnyk podiji, funkcija, kotra pry natysteniu na storinku
    //za dopomogoju dispatch peredeje w state currentPage i takorz
    //daje zapyt na server, szczob otrymaty korystuwaciw dla widpowidniji storinky
    onPageChange = (pageNumber) => {
        this.props.selectPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);    
        });
    }


    render = () => {
        return (
            <div>
                {this.props.isFetching 
                ? <Loader /> 
                : <Users 
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChange={this.onPageChange}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow} />}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followedAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowedAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        selectPage: (currentPage) => {
            dispatch (selectPageAC(currentPage));
        },

        setTotalCount: (totalCount) => {
            dispatch (setTotalCountAC(totalCount));
        },

        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)