import Friends from "../components/Navbar/Friends/Friends";
import renderEntireTree from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: "Hi, how are you?", likeCounter: 12},
            {id: 2, message: "It's my firs post", likeCounter: 13},
            {id: 3, message: "It's my second post", likeCounter: 14},
            {id: 4, message: "It's my third post", likeCounter: 15},
            {id: 5, message: "It's my fourth post", likeCounter: 16},
            {id: 6, message: "It's my fifth post", likeCounter: 17  }
        ],
        newPostText: "it"
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

//Створюю функцію, котра буде брати значення з textarea (котре передається в state.profilePage.newPostText,)
//на сторінці MyPosts і створювати новий пост
//в об'єкті state.profilePage.postData. Імпортую цю функцію в render.js і прокидую через props в MyPosts
//Функція renderEntireTree перемалбовує цілу сторінку, якщо власне було вписане значення в текст ареа і вислане
//тим самим воно додалось до об'єкту state.profilePage.postData
export let addPost = () => {
    let newPostObj = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounter: 0
    };
    state.profilePage.postData.unshift(newPostObj);
    renderEntireTree(state, addPost);
}

//Функція updateTextArea приймає в собе значення (Це значення береться за допомогою onChange в файлі MyPosts
// з textarea) і додає його в stateв властивіть newPostText і перемальовує ще раз цілу сторінку renderEntireTree
export let updateTextArea = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state, addPost);
}


export default state;