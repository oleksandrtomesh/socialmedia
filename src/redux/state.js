import Friends from "../components/Navbar/Friends/Friends";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: "Hi, how are you?", likeCounter: 12},
            {id: 2, message: "It's my firs post", likeCounter: 13},
            {id: 3, message: "It's my second post", likeCounter: 14},
            {id: 4, message: "It's my third post", likeCounter: 15},
            {id: 5, message: "It's my fourth post", likeCounter: 16},
            {id: 6, message: "It's my fifth post", likeCounter: 17  }
        ]
    },
    dialogPage: {
        messageData:[
            {id: 1, message: "Hello"},
            {id: 1, message: "How are you"}
        ],
        dialogData: [
            {id: 1, name: "Tania"},
            {id: 2, name: "Pietia"},
            {id: 3, name: "Sasha"},
            {id: 4, name: "Vova"},
            {id: 5, name: "Marina"},
            {id: 6, name: "Vasia"},
            {id: 7, name: "Igor"}
        ]
    },
    friendsItems: [
        {id: 1, name: "Tania"},
        {id: 2, name: "Pietia"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Vova"},
        {id: 4, name: "Vova"},
        {id: 4, name: "Vova"},
        {id: 4, name: "Vova"},
        {id: 4, name: "Vova"},
        {id: 4, name: "Vova"}
    ]
};

//Створюю функцію, котра буде брати значення з textarea на сторінці MyPosts і створювати новий пост
//в об'єкті state. Імпортую цю функцію в index.js і прокидую через props в MyPosts
export let addPost = (newPost) => {
    let newPostObj = {
        id: 5,
        message: newPost,
        likeCounter: 0
    };
    state.profilePage.postData.push(newPostObj);
}


export default state;