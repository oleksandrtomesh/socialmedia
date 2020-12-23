import React from 'react';
import c from './UsersPage.module.css';
import * as axios from 'axios';
import userPhoto from "../../assets/images/avatar.png";

class UsersPage extends React.Component {

    constructor(props) {
        super(props);
        debugger;
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
        alert("yo");
    }

    render = () => {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <div>
                                {/* jakszczo na serweri w objekti objekt photos maje wlastywist small = null,
                                to wykorystowujemo standartnu kartynku */}
                                <img alt="small avatar" className={c.profileImg} src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}

export default UsersPage