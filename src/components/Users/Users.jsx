import React from 'react';
import styles from './UsersPage.module.css';
import Pagination from 'react-js-pagination'
import User from './User/User';

let Users = ({pageSize, totalUsersCount, onPageChange, currentPage, ...props}) => {


    return (
        <div>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={pageSize}
                totalItemsCount={totalUsersCount}
                pageRangeDisplayed={5}
                onChange={onPageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
            {props.users.map(user => <User user={user} {...props}/>)}
        </div>
    );
}

export default Users