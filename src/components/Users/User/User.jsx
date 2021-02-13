import React from 'react';
import c from './UsersPage.module.css';
import userPhoto from "../../../assets/images/avatar.png";
import { NavLink } from 'react-router-dom';

let User = ({user, ...props}) => {

    return (
    <div>
        <div>
            <div>
                {/* za dopomogoju NavLink pry natysneni na avu korystuwacza w Users perenosymos na storinku korystuwacza */}
                <NavLink to={"/profile/" + user.id}>
                    {/* jakszczo na serweri w objekti objekt photos maje wlastywist small = null,
                                to wykorystowujemo standartnu kartynku */}
                    <img alt="small avatar" className={c.profileImg}
                        src={user.photos.small !== null ? user.photos.small : userPhoto} />
                </NavLink>
            </div>
            <div>
                {/* jakszczo w state followed = true */}
                <button disabled={props.isFollowFetching.some(id => id === user.id)} onClick={() => {

                    //unfollowUser it is thunk creator in user-reducer
                    props.toggleFollowingUser(user.id, user.followed);

                }}>{user.followed ? "Unfollow" : "Follow"}</button>
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