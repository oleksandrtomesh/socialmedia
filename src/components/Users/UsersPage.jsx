import React from 'react';
import c from './UsersPage.module.css';
import * as axios from 'axios';
import userPhoto from "../../assets/images/avatar.png";

class UsersPage extends React.Component {

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            this.props.setUsers(response.data.items);
            if (response.data.totalCount < 100){        
                this.props.setTotalCount(response.data.totalCount);
            } else {
                this.props.setTotalCount(100);
            }
        });
    }

    //tse obrobnyk podiji, funkcija, kotra pry natysteniu na storinku
    //za dopomogoju dispatch peredeje w state currentPage i takorz
    //daje zapyt na server, szczob otrymaty korystuwaciw dla widpowidniji storinky
    onPageChange = (pageNumber) => {
        this.props.selectPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render = () => {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for(let i = 1; i <= pageCount; i++){
            pages.push(i);
        }

        return (
        <div>
                <div>
                    {pages.map (pageNumber => {
                        return <span 
                        key={pageNumber} 
                        onClick={() => this.onPageChange(pageNumber) } 
                        //umowa, szczob dla wybranoji storinky cyfra bula rzyrnoju
                        //tse ternarnyj operator tilky z odnom naslidkom
                        //tobto jakszo nasza umowa this.props.currentPage === pageNumber true
                        className={ this.props.currentPage === pageNumber && c.selectedPage }>
                            {pageNumber}
                        </span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
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
                                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    //jakszczo false to wykonajetsia tsia
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