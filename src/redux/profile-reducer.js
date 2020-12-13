
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA ='UPDATE-TEXT-AREA';

const profileReducer = (state, action) => {
        //Створюю функцію (метод), котра буде брати значення з textarea (котре передається в state.profilePage.newPostText,)
        //на сторінці MyPosts і створювати новий пост в об'єкті state.profilePage.postData.
        //Імпортую цю функцію в render.js і прокидую через props в MyPosts
        //Функція renderEntireTree перемалбовує цілу сторінку, якщо власне було вписане значення в текст ареа і вислане
        //тим самим воно додалось до об'єкту state.profilePage.postData і потім зануляє значення в текстареа зануленням значення в 
        //state.profilePage.newPostText
        switch (action.type) {
            case ADD_POST:
                let newPostObj = {
                    id: 5,
                    message: state.newPostText,
                    likeCounter: 0
                };
                state.postData.unshift(newPostObj);
                state.newPostText = "";
                return state;
        //Функція(метод) updateTextArea приймає в себе значення (Це значення береться за допомогою onChange в файлі MyPosts
        // з textarea) і додає його в stateв властивіть newPostText і перемальовує ще раз цілу сторінку renderEntireTree

            case UPDATE_TEXT_AREA:
                //тут немає +, тому що onChange ловить дані в момент вводу в textarea
                //наприкад, якшо в textarea введено "а" ы ми вписуємо "б"
                //то в моменті вписаня спрацьовує onChange і запускає функцію onPostChange
                //яка в свою чергу приймає значення елементу в момент вписання, 
                //тобто там буде значення "аб" і вже тут ми присвоюємо його state.profilePage.newPostText
                //і потім renderEntireTree перемальовує сторінку вже з значенням "аб" в textarea
                state.newPostText = action.newText;
                return state;
            default:
                return state;
        }
    }

//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл MyPosts
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextAreaActionCreator = (text) => ({ type: UPDATE_TEXT_AREA, newText: text })

export default profileReducer;