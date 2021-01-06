import React from 'react';
import c from './UsersPage.module.css';
import userPhoto from "../../assets/images/avatar.png";
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(pageNumber => {
                    return <span
                        key={pageNumber}
                        onClick={() => props.onPageChange(pageNumber)}
                        //umowa, szczob dla wybranoji storinky cyfra bula rzyrnoju
                        //tse ternarnyj operator tilky z odnom naslidkom
                        //tobto jakszo nasza umowa this.props.currentPage === pageNumber true
                        className={props.currentPage === pageNumber && c.selectedPage}>
                        {pageNumber}
                    </span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
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
                            {user.followed
                                //to wykonajetsia tsia umowa przy natysneni na knopku
                                ? <button disabled={props.isFollowFetching.some(id => id === user.id  )} onClick={() => {

                                    //unfollowUser it is thunk creator in user-reducer
                                    props.unfollowUser(user.id);

                                }}>Unfollow</button>
                                //jakszczo false to wykonajetsia tsia
                                : <button disabled={props.isFollowFetching.some(id => id === user.id)} onClick={() => {

                                        //followUser it is thunk creator in user-reducer
                                        props.followUser(user.id)

                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div>{"u.status"}</div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>

                </div>
                )
            }
        </div>

    );
}

export default Users