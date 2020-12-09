import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { updateTextArea } from './redux/state';


//Об'єкт state i функцію addPost не можна імпортувати з state
//щоб не було циклічної залежностіб тому в файл renderв функцію renderEntireTree
//прокидуємо їх через props
let renderEntireTree = (state, addPost) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} updateTextArea={updateTextArea} />
  </React.StrictMode>,
  document.getElementById('root')
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default renderEntireTree;
