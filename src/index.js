import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Об'єкт state i функцію addPost не можна імпортувати з state
//щоб не було циклічної залежностіб тому в файл renderв функцію renderEntireTree
//прокидуємо їх через props

ReactDOM.render(
    <React.StrictMode>
        {/* BrowserRouter beretsia z biblioteki React i potribnyj, dla wykorystania 
        Rout w proecti (Route zminjuje adresu w URL) */}
        <HashRouter>
        {/* Provider, tse komponenta kotra beretsia z biblioteki
        react-redux i potribna dla wykorystania connect w naszomu codi */}
            <Provider store={store}>        
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>,
document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
