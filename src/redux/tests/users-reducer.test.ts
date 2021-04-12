import usersReducer, { initialStateType, userReducerActionsCreators } from './../users-reducer';
//1. initial data for test
let state: initialStateType 


beforeEach( () => {
    state = {
    users:[{
        followed: true, id: 0, name: 'name1',
        photos: { large: null, small:null }, status: 'status1'
    }, 
    {
        followed: false, id: 1, name: 'name2',
        photos: { large: null, small:null }, status: 'status2'
    },
    {
        followed: true, id: 2, name: 'name3',
        photos: { large: null, small:null }, status: 'status3'
    },
    {
        followed: false, id: 3, name: 'name4',
        photos: { large: null, small:null }, status: 'status4'
    }],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollow: false,
    followingInProgress: [] 
    }
})
test('usersReducer follow success', () => {
    //2. action for test
    const newState = usersReducer(state, userReducerActionsCreators.toggleFollowing(1, true))

    //3. check expectation
    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})

test('usersReducer unFollow success', () => {
    //2. action for test
    const newState = usersReducer(state, userReducerActionsCreators.toggleFollowing(2, false))

    //3. check expectation
    expect(newState.users[2].followed).toBeFalsy()
    expect(newState.users[0].followed).toBeTruthy()
})