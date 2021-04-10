import { connect, ConnectedProps } from 'react-redux';
import { addNewPost} from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

let mapStateToProps = (state: AppStateType) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
    users: state.usersPage.users,
    authorizedUserId: state.authorization.data
  }
}

const connector = connect(mapStateToProps, {addNewPost});

const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts);
export default MyPostsContainer;

export type MyPostsType = ConnectedProps<typeof connector>