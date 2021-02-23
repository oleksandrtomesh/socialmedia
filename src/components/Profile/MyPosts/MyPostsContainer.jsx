import { connect } from 'react-redux';
import { addNewPost} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
    users: state.usersPage.users,
    authorizedUserId: state.authorization.data
  }
}


const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts);
export default MyPostsContainer;