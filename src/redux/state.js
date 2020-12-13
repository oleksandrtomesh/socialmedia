import dialogsReducer from "./dialogs-reducer";
import friendsItemsReducer from "./friendItems-reducer";
import profileReducer from "./profile-reducer";

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
        //Вже в самому dispatch створюємо функції reducer котрі поміщаємо в інші файли 
        //і передаємо їм тільтки той state, що стосуэться їх сторінок. І також передаємо в ці функції 
        //action (це об'єкт в якому зберігуються ключові значення такі як type i t.d )
        //а вже в цих функціях виконується зміна стeйту при зміні UI
        //тобто вже там знаходяться функції
        //і після того як усі редюсери повернули нам стети, ми повідомлюємо підпинсника,
        // що наш стейт змінився і потрібно перемалювати новий інтефейс

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.friendsItems = friendsItemsReducer(this._state.friendsItems, action);

        this._callSubscribe(this._state);

    }

};

export default store;