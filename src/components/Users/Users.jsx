import React from 'react';
import c from './UsersPage.module.css';
import userPhoto from "../../assets/images/avatar.png";
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination/Pagination';
import User from './User/User';

let Users = (props) => {


    return (
        <div>
            <Pagination {...props} />
            {props.users.map(user => <User user={user} {...props}/>)}
        </div>
    );
}

export default Users