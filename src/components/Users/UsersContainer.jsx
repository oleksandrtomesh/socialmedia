import React from 'react'
import { connect } from 'react-redux';
import { follow, selectPage, setTotalCount, setUsers, toggleIsFetching, unfollow } from '../../redux/users-reducer';
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

//zamist funkcji mapDispatchToProps kotra stworuje callbacki, można w connect 2 parametrom peredaty 
//object z action creatoriw. Tse skoroczuje kod

// let mapDispatchToProps = (dispatch) => {    tsia funkcija = tsiomu {follow, unfollow, setUsers, selectPage, setTotalCount, toggleIsFetching}
//     return{
//         follow: (userId) => {
//             dispatch(followedAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowedAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },

//         selectPage: (currentPage) => {
//             dispatch (selectPageAC(currentPage));
//         },

//         setTotalCount: (totalCount) => {
//             dispatch (setTotalCountAC(totalCount));
//         },

//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

//w importi do nas ne prychodyt funkcjija a prychodyt tilky posylania na tsiu 
//funkciju. Tobto ajkszczo my prokynemo funkciju czerez propsy, to wona wyzwetsia w fajli de wona zapysana
//a connect zi swojeji storony stworyt dla nas dispatch. Tobto my wykorystowujemo funcji action creator dla stworenia
//objektu i tsej odjekt poti dispatczytsia w reduser i tam wże wyzywajetsia neobchidna funkcjia

export default connect(mapStateToProps, { follow, unfollow, setUsers, selectPage, setTotalCount, toggleIsFetching})(UsersPage) 