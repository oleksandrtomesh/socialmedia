import React from 'react';
//import styles from './UsersPage.module.css';
import Pagination from 'react-js-pagination'
import User from './User/User';
import styles from './UsersPage.module.css'
import { UsersType } from '../../redux/users-reducer';

type PropsType = {
    pageSize: number
    totalUsersCount: number
    onPageChange: (pageNumber: number) => void
    currentPage: number
    users: Array<UsersType>

}


let Users: React.FC<PropsType> = ({pageSize, totalUsersCount, onPageChange, currentPage, ...props}) => {


    return (
        <div>
            <div className={styles.pagination}>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={pageSize}
                totalItemsCount={totalUsersCount}
                pageRangeDisplayed={5}
                onChange={onPageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
            </div>
            {props.users.map(user => <User key={user.id} user={user}  {...props}/>)}
        </div>
    );
}


export default Users