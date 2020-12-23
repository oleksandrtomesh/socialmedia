import { connect } from "react-redux";
import { followedAC, setUsersAC, unfollowedAC } from "../../redux/users-reducer";
import UsersPage from "./UsersPage";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)