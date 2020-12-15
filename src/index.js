import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Об'єкт state i функцію addPost не можна імпортувати з state
//щоб не було циклічної залежностіб тому в файл renderв функцію renderEntireTree
//прокидуємо їх через props

let renderEntireTree = (state) => {
ReactDOM.render(
    <React.StrictMode>

        {/* bind закріпляє this для методує де використовує
            тобто в цьому випадку деб ми не використали dispatch
            з this, this буде об'єкт store */}
            
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
document.getElementById('root')
);
}

renderEntireTree(store.getState());

//передаємо функцію renderEntireTree в store щоб там використати в addPost i updateTextArea
//creatStore awtomatyczno stworuje funkciju subscribe, tomu my moemo peredyty w cu funkciju jakus
//inszu funkciju (callback) kotra bude wykonuwatys, koly bude zminuwatys nasz state
store.subscribe( () => {
    //createStore takorz awtomatyczno stworuje funkciju getState() za dopomogoju jakoji my morzemo 
    //otrymaty wes state
    let state =store.getState();
    //i peredaty jogo w funkciju dla peremaluwania cilogo derewa
    renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
