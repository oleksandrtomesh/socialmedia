type FriendsItemType = {
    id: number
    name: string
}

let initialState = {
    friendsItems: [
    {id: 1, name: "Tania"},
    {id: 2, name: "Pietia"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Vova"},
    {id: 5, name: "Vova"},
    {id: 6, name: "Vova"},
    {id: 7, name: "Vova"},
    {id: 8, name: "Vova"},
    {id: 9, name: "Vova"}
] as Array<FriendsItemType>
};

type InitialStateType = typeof initialState

const friendsItemsReducer = (state = initialState, action: any):InitialStateType => state;

export default friendsItemsReducer;