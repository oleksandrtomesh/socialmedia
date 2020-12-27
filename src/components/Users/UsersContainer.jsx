import { connect } from "react-redux";
import { followedAC, selectPageAC, setTotalCountAC, setUsersAC, unfollowedAC } from "../../redux/users-reducer";
import UsersPage from "./UsersPage";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)