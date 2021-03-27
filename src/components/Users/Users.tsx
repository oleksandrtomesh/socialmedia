import React from 'react';
//import styles from './UsersPage.module.css';
import Pagination from 'react-js-pagination'
import User from './User/User';
import styles from './UsersPage.module.css'
import { UsersType } from '../../redux/users-reducer';

type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    toggleFollowingUser: (userId: number, followed: boolean) => void
    handlePageChange: (pageNumber:number, pageSize: number) => void
}


let Users: React.FC<PropsType> = ({pageSize, totalUsersCount, currentPage, handlePageChange, users, ...props}) => {

    const onPageChange = (pageNumber: number): void =>{
        handlePageChange(pageNumber, pageSize);
    }

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
            {users.map(user => <User key={user.id} user={user}  {...props}/>)}
        </div>
    );
}


export default Users