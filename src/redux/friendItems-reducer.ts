import { UsersType } from './users-reducer';
import { InferActionsType } from './../types/types';


let initialState = {
    friendsItems: [
] as Array<UsersType>
};

type InitialStateType = typeof initialState

const friendsItemsReducer = (state = initialState, action: FriendItemsActionsType):InitialStateType => {
    
        switch (action.type){
            case 'app/friendsItems-reducer/ADD-FOLLOWING-USER':
                return {
                    ...state,
                    friendsItems: [...state.friendsItems, action.user]
                }
            case 'app/friendsItems-reducer/REMOVE-USER':
                return {
                    ...state,
                    friendsItems: state.friendsItems.filter((friend) => friend.id !== action.id)
                }

            default: 
                return state
        }
    
}

export type FriendItemsActionsType = InferActionsType<typeof friendsItemsActions>

export const friendsItemsActions = {
    addFollowingUser: (user: UsersType) => ({type: 'app/friendsItems-reducer/ADD-FOLLOWING-USER', user} as const),
    removeUserFromFriendsItems: (id: number) => ({type: 'app/friendsItems-reducer/REMOVE-USER', id} as const)
}

export default friendsItemsReducer;