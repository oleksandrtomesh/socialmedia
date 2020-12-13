const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA ='UPDATE-TEXT-AREA';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';

let store = {
    // "_" означає, що не можна звертатись до властивості об'єкта ззовні
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hi, how are you?", likeCounter: 12},
                {id: 2, message: "It's my firs post", likeCounter: 13},
                {id: 3, message: "It's my second post", likeCounter: 14},
                {id: 4, message: "It's my third post", likeCounter: 15},
                {id: 5, message: "It's my fourth post", likeCounter: 16},
                {id: 6, message: "It's my fifth post", likeCounter: 17  }
            ],
            newPostText: ""
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
            ],
            newMessageText: ""
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
    
    },

    _callSubscriber(){
    },

    getState () {
        return store._state;
    },

    //створюємо функцію котра власне і буде приймати функцію
    //ця функція створюється для того, щоб callbackom перекинути функцію з файлу index.js (функцію котра перемальльовує
    //все дерево renderEntireTree після зміни state)
    //без імпорту, щоб не створювалась циклічна залежність

    subscriber(observer){
        this._callSubscribe = observer; //почитати про observer - це патерн
    },

    //якщо ми не пишемо лет в функції біля зміної, то ця зміна якщо не находить
    //оголошення себе в середині даної функції випригує за її межі і шукає значення 
    //глобально. В нашому випадку вона оголоше з самого верху 

    //в dispatch записуються всі методи які ми використовуємо в проекті. Action - це об'єт,Action обов'язково має мати key type
    //щоб визвати відповідний метод, потрібно прокинути dispatch куди нам потрібно і потім
    //props.dispatch({type: 'ADD-POST'}) визвати таким чином props.dispatch({type: 'UPDATE-TEXT-AREA', newText: text})
    dispatch(action){
        //Створюю функцію (метод), котра буде брати значення з textarea (котре передається в state.profilePage.newPostText,)
        //на сторінці MyPosts і створювати новий пост в об'єкті state.profilePage.postData.
        //Імпортую цю функцію в render.js і прокидую через props в MyPosts
        //Функція renderEntireTree перемалбовує цілу сторінку, якщо власне було вписане значення в текст ареа і вислане
        //тим самим воно додалось до об'єкту state.profilePage.postData і потім зануляє значення в текстареа зануленням значення в 
        //state.profilePage.newPostText
        if (action.type === 'ADD-POST') {
            let newPostObj = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounter: 0
            };
            this._state.profilePage.postData.unshift(newPostObj);
            this._callSubscribe(this._state);
            this._state.profilePage.newPostText = "";
        } 
        //Функція(метод) updateTextArea приймає в себе значення (Це значення береться за допомогою onChange в файлі MyPosts
        // з textarea) і додає його в stateв властивіть newPostText і перемальовує ще раз цілу сторінку renderEntireTree
        else if (action.type === 'UPDATE-TEXT-AREA') {
            //тут немає +, тому що onChange ловить дані в момент вводу в textarea
            //наприкад, якшо в textarea введено "а" ы ми вписуємо "б"
            //то в моменті вписаня спрацьовує onChange і запускає функцію onPostChange
            //яка в свою чергу приймає значення елементу в момент вписання, 
            //тобто там буде значення "аб" і вже тут ми присвоюємо його state.profilePage.newPostText
            //і потім renderEntireTree перемальовує сторінку вже з значенням "аб" в textarea
            this._state.profilePage.newPostText = action.newText;
            this._callSubscribe(this._state);   
        }
        else if (action.type === 'ADD-MESSAGE') {
                let newMessageObj = {
                    id: 5,
                    message: this._state.dialogPage.newMessageText,
                };
                this._state.dialogPage.messageData.push(newMessageObj);
                this._callSubscribe(this._state);
                this._state.dialogPage.newMessageText = "";
        }
        else if (action.type === 'UPDATE-MESSAGE-AREA'){
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubscribe(this._state); 
        }
    }

};

//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextAreaActionCreator = (text) => ({ type: UPDATE_TEXT_AREA, newText: text })

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateMessageAreaActionCreator = (text) => ({ type: UPDATE_MESSAGE_AREA, newText: text })


export default store;