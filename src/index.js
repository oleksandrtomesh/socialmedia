import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
  {id: 1, name: "Tania"},
  {id: 2, name: "Pietia"},
  {id: 3, name: "Sasha"},
  {id: 4, name: "Vova"},
  {id: 5, name: "Marina"},
  {id: 6, name: "Vasia"},
  {id: 7, name: "Igor"}
];

let messageData = [
  {id: 1, message: "Hello"},
  {id: 1, message: "How are you"}
];


let postData = [
  {id: 1, message: "Hi, how are you?", likeCounter: 12},
  {id: 2, message: "It's my firs post", likeCounter: 13},
  {id: 3, message: "It's my second post", likeCounter: 14},
  {id: 4, message: "It's my third post", likeCounter: 15},
  {id: 5, message: "It's my fourth post", likeCounter: 16},
  {id: 6, message: "It's my fifth post", likeCounter: 17  }
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
