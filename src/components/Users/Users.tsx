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
import { useHistory } from 'react-router';
import * as queryString from 'querystring'


let Users: React.FC =React.memo( () => {

    

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

    //useHistory same as withRouter HOC. It`s gat data from URL
    const history = useHistory()
    debugger

    //get users for first page
    useEffect(() => {

        //parse string(make an object) from url(without ? on the begin substr delete it)
        const parse = queryString.parse(history.location.search.substr(1))
        // parse = {
        //     term: '',
        //     friend: 'true' | 'false' | 'null'
        //     page: number
        // }

        //start actual data
        let actualPage = currentPage
        let actualFilter = filter

        //if url come not empty change our actual data onto data from url query
        if (!!parse.page) actualPage = Number(parse.page)
        if (!!parse.term) actualFilter = {...actualFilter, term: parse.term as string }
        if (!!parse.friend) actualFilter = 
            {...actualFilter, friend: parse.friend === "true" ? true : parse.friend === "false" ? false: null}
        
        //dispatch getUsersWithFilter thunk already with actual data from url
        dispatch(getUsersWithFilter(actualPage, pageSize, actualFilter))
    }, [])

    //synchronization of url depends on filter data
    useEffect ( ()=> {

        //push filter data into url
        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage])

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
})

const UsersPage = withAuthRedirect(Users)
export default UsersPage

