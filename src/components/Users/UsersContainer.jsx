import React from 'react'
import { connect } from 'react-redux';
import {
    selectPage,
    getUsers,
    unfollowUser,
    followUser,
    toggleIsFetching,
    setUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../commonElements/loader/loader';
import usersAPI from '../../api/api';


class UsersPage extends React.Component {

    componentDidMount = () => {
        //tse funkcija thunk creator, jaka stworujetsia w user-redux
        //i mistyt w sobi wsu logiku taku jak pobrania users z servera, pokazuwania krutilky, doky jde zagruzka useriw
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    //tse obrobnyk podiji, funkcija, kotra pry natysteniu na storinku
    //za dopomogoju dispatch peredeje w state currentPage i takorz
    //daje zapyt na server, szczob otrymaty korystuwaciw dla widpowidniji storinky
    onPageChange = (pageNumber) => {
        this.props.selectPage(pageNumber);
        this.props.toggleIsFetching(true);
        //w metodi getUsers inkapsulowano zapyt do servera za dopomogoju axios
        //wsia informcjia pro tsiu funkcji znachodytsia w src/api/api.js 
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                debugger;
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);    
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
                    follow={this.props.follow} 
                    toggleIsFollowFetching={this.props.toggleIsFollowFetching}
                    isFollowFetching={this.props.isFollowFetching}
                    unfollowUser={this.props.unfollowUser}
                    followUser={this.props.followUser}
                    />}
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
        isFetching: state.usersPage.isFetching,
        isFollowFetching: state.usersPage.isFollowFetching,
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

export default connect(mapStateToProps, 
    //w mapDispatch to props morzna peredawaty i actionCreator, jaki budut zadispatczeni w store
    //i takorz morzna peredawaty thunkkreator
    { selectPage, toggleIsFetching, setUsers,
        //thunk creators 
        getUsers, unfollowUser, followUser})(UsersPage) 