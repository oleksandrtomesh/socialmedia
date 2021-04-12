import React from 'react';
//import styles from './UsersPage.module.css';
import Pagination from 'react-js-pagination'
import User from './User/User';
import styles from './UsersPage.module.css'
import { FilterType, UsersType } from '../../redux/users-reducer';
import FilterUsersBar from './FilterUsersBar/FilterUsersBar';


let Users: React.FC<PropsType> = ({pageSize, totalUsersCount, currentPage, term, users, handlePageChange,  handleFilterSubmit, ...props}) => {

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
            <div className={styles.filterUsersBar}>
                <FilterUsersBar handleFilterSubmit={handleFilterSubmit} term={term}/>
            </div>
            {users.map(user => <User key={user.id} user={user}  {...props}/>)}
        </div>
    );
}


export default Users

type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    term: string
    toggleFollowingUser: (userId: number, followed: boolean) => void
    handlePageChange: (pageNumber:number, pageSize: number) => void
    handleFilterSubmit: (filter: FilterType) => void
}