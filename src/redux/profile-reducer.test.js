import profileReducer, { addPost } from './profile-reducer';
// 1. data
let state = {
    postData: [
        {id: 1, message: "Hi, how are you?", likeCounter: 12},
        {id: 2, message: "It's my firs post", likeCounter: 13},
        {id: 3, message: "It's my second post", likeCounter: 14},
        {id: 4, message: "It's my third post", likeCounter: 15},
        {id: 5, message: "It's my fourth post", likeCounter: 16},
        {id: 6, message: "It's my fifth post", likeCounter: 17  }
    ]
};

it('new post should be added', ()=>{
    let action = addPost('Sasha')
    // 2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.postData.length).toBe(7);
})
