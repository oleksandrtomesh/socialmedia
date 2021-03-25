import React from 'react'
import { connect, ConnectedProps } from 'react-redux';
import {
    selectPage,
    getUsers,
    toggleIsFetching,
    setUsers,
    toggleFollowingUser,
} from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../commonElements/loader/loader';
import usersAPI from '../../api/api';
import { compose } from 'redux';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';
import { UserProfileType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type PropsFromRedux = ConnectedProps<typeof connector>

type PropsType = PropsFromRedux & {onPageChange: (pageNumber: number) => void}

class UsersPage extends React.Component<PropsType> {

    componentDidMount = () => {
        //get users for page 1
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber: number) => {
        this.props.selectPage(pageNumber);
        this.props.toggleIsFetching(true);
        //getUsers function what get users from server
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data: any) => {
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


const connector = connect (mapStateToProps, { selectPage, toggleIsFetching, setUsers, getUsers, toggleFollowingUser})

export default compose(
    connector,
    withAuthRedirect
)(UsersPage);

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

//export default connect(mapStateToProps, 
    //w mapDispatch to props morzna peredawaty i actionCreator, jaki budut zadispatczeni w store
    //i takorz morzna peredawaty thunkkreator
    //{ selectPage, toggleIsFetching, setUsers,
        //thunk creators 
        //getUsers, unfollowUser, followUser})(RedirectComponent);