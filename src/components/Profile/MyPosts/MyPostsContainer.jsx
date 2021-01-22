import { connect } from 'react-redux';
import { addNewPost} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}


const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts);
export default MyPostsContainer;