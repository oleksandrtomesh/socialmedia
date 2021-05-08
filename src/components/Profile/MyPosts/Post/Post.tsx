import React from 'react';
import { useSelector } from 'react-redux'
import { getUserProfile } from '../../../../redux/selectors/profileSelectors';
import c from './Post.module.css';


const Post: React.FC<PropsType> = ({message, likeCounter, date}) => {

  const fullName = useSelector(getUserProfile)?.fullName
  
  return (
    <div>
      <div className={c.item}>
        <div className={c.postInfo}>
          <img src="https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722" alt="postAvatar" />
          <div className={c.name}>
            <div>{fullName}</div>
            <div>{date}</div>
          </div>
        </div>
        <div className={c.message}>
          {message}
        </div>
        <div className={c.like}>
          Like {likeCounter}
        </div>
      </div>
    </div>
  );
}

export default Post;


type PropsType = {
  message: string
  likeCounter: number
  date: string
}