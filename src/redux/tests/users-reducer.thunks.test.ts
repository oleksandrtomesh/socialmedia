import { handlePageChange } from './../users-reducer';
import { ResultCode } from '../../api/api';
import { usersAPI, GetUsersResponseType, FollowedUserResponseType } from '../../api/usersAPI';
import { getUsersWithFilter, toggleFollowingUser, userReducerActionsCreators } from '../users-reducer';

//jest.mock make whatever return from './../../api/usersAPI' fake
jest.mock('../../api/usersAPI')

//fake function instead dispatch and getState
const dispatchMock = jest.fn()
const getState = jest.fn()

//after jest.mock() fc userAPI already fake
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

beforeEach(()=>{
    dispatchMock.mockClear()
    getState.mockClear()
})
const followingResult: FollowedUserResponseType = {
    resultCode: ResultCode.success,
    messages: ["some mes"],
    data: {}
}

const getUsersResult: GetUsersResponseType = {
    error: null,
    items: [{
        followed: true,
        id: 1,
        name: "name",
        photos: {
            large: null,
            small: null
        },
        status: 'status'
    }],
    totalCount: 1
}

test('success toggleFollowingUser thunk (follow user)', async () => {
    //with help of mockReturnValue assign return value for userAPI methods
    usersAPIMock.followUser.mockReturnValue(Promise.resolve(followingResult))
    //call thunkCreator getUsers that create thunk
    const thunk = toggleFollowingUser(1, false)
    
    await thunk(dispatchMock, getState, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, userReducerActionsCreators.toggleIsFollowFetching(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, userReducerActionsCreators.toggleFollowing(1, true))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, userReducerActionsCreators.toggleIsFollowFetching(false, 1))
})

test('success toggleFollowingUser thunk (unfollow user)', async () => {
    //with help of mockReturnValue assign return value for userAPI methods
    usersAPIMock.unfollowUser.mockReturnValue(Promise.resolve(followingResult))
    //call thunkCreator getUsers that create thunk
    const thunk = toggleFollowingUser(1, true)
    
    await thunk(dispatchMock, getState, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, userReducerActionsCreators.toggleIsFollowFetching(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, userReducerActionsCreators.toggleFollowing(1, false))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, userReducerActionsCreators.toggleIsFollowFetching(false, 1))
})

test('success getUsers thunk', async () => {
    //with help of mockReturnValue assign return value for userAPI methods
    usersAPIMock.getUsers.mockReturnValue(Promise.resolve(getUsersResult))
    //call thunkCreator getUsers that create thunk
    const thunk = getUsersWithFilter(1, 1)
    
    await thunk(dispatchMock, getState, {})

    expect(dispatchMock).toBeCalledTimes(5)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, userReducerActionsCreators.toggleIsFetching(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, userReducerActionsCreators.setFilter({term: "", friend: null}))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, userReducerActionsCreators.toggleIsFetching(false))
    expect(dispatchMock).toHaveBeenNthCalledWith(4, userReducerActionsCreators.setUsers(getUsersResult.items))
    expect(dispatchMock).toHaveBeenNthCalledWith(5, userReducerActionsCreators.setTotalCount(getUsersResult.totalCount))
})

test('success handlePageChange thunk', async () => {
    //with help of mockReturnValue assign return value for userAPI methods
    usersAPIMock.getUsers.mockReturnValue(Promise.resolve(getUsersResult))
    //call thunkCreator getUsers that create thunk
    const thunk = handlePageChange(1, 1)
    
    await thunk(dispatchMock, getState, {})

    expect(dispatchMock).toBeCalledTimes(4)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, userReducerActionsCreators.selectPage(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, userReducerActionsCreators.toggleIsFetching(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, userReducerActionsCreators.toggleIsFetching(false))
    expect(dispatchMock).toHaveBeenNthCalledWith(4, userReducerActionsCreators.setUsers(getUsersResult.items))
})