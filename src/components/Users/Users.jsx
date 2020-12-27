import React from 'react';
import c from './UsersPage.module.css';
import userPhoto from "../../assets/images/avatar.png";

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
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            {/* jakszczo na serweri w objekti objekt photos maje wlastywist small = null,
                                to wykorystowujemo standartnu kartynku */}
                            <img alt="small avatar" className={c.profileImg} src={u.photos.small !== null ? u.photos.small : userPhoto} />
                        </div>
                        <div>
                            {/* jakszczo w state followed = true */}
                            {u.followed
                                //to wykonajetsia tsia umowa przy natysneni na knopku
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                //jakszczo false to wykonajetsia tsia
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{u.name}</div>
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