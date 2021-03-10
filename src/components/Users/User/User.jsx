import React from 'react';
import styles from './UsersPage.module.css';
import userPhoto from "../../../assets/images/avatar.png";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

let User = ({user, ...props}) => {

    return (
    <div className={styles.item}>
        <div className={styles.avatarButton}>
            <div>
                <NavLink to={"/profile/" + user.id}>
                    <img alt="small avatar" className={styles.profileImg}
                        src={user.photos.small !== null ? user.photos.small : userPhoto} />
                </NavLink>
            </div>
            <div>
                <Button type="submit" variant="dark" 
                    disabled={props.isFollowFetching.some(id => id === user.id)} 
                    onClick={() => {props.toggleFollowingUser(user.id, user.followed)}}
                >
                    {user.followed ? "Unfollow" : "Follow"}
                </Button>
            </div>
        </div>
        <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </div>
    </div>
    )

}

export default User