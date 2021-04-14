import React, { useEffect } from 'react';
//import styles from './UsersPage.module.css';
import Pagination from 'react-js-pagination'
import User from './User/User';
import styles from './UsersPage.module.css'
import { FilterType, handlePageChange, getUsersWithFilter, toggleFollowingUser } from '../../redux/users-reducer';
import FilterUsersBar from './FilterUsersBar/FilterUsersBar';
import { useSelector, useDispatch } from 'react-redux';
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getFilter,
    getUsers,
    getIsFetching,
    getFollowingInProgress
} from '../../redux/selectors/usersSelectors';
import Loader from '../commonElements/loader/loader';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';


let Users: React.FC = () => {

    

    const dispatch = useDispatch()

    const pageSize = useSelector(getPageSize)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getFilter)
    const users = useSelector(getUsers)
    const isFetching = useSelector(getIsFetching)
    const followingInProgress = useSelector(getFollowingInProgress)

    const handleFilterSubmit = (filter: FilterType) => {
        dispatch(getUsersWithFilter(1, pageSize, filter))
    }
    const onPageChange = (pageNumber: number): void =>{
        dispatch(handlePageChange(pageNumber, pageSize, filter))
    }
    const toggleFollowingUsers = (userId: number, followed: boolean) =>{
        dispatch(toggleFollowingUser(userId, followed))
    }

    //get users for first page
    useEffect(() => {
        dispatch(getUsersWithFilter(currentPage, pageSize))
    }, [currentPage, pageSize, dispatch])

    return (
            isFetching
            ?<Loader /> 
            :<div>
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
                <FilterUsersBar handleFilterSubmit={handleFilterSubmit} filter={filter}/>
            </div>
            {users.map(user => <User key={user.id} user={user}  
                toggleFollowingUser = {toggleFollowingUsers} followingInProgress={followingInProgress}/>)}
        </div>
    );
}

const UsersPage = withAuthRedirect(Users)
export default UsersPage

