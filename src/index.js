import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//Об'єкт state i функцію addPost не можна імпортувати з state
//щоб не було циклічної залежностіб тому в файл renderв функцію renderEntireTree
//прокидуємо їх через props

ReactDOM.render(
    <React.StrictMode>
        {/* BrowserRouter beretsia z biblioteki React i potribnyj, dla wykorystania 
        Rout w proecti (Route zminjuje adresu w URL) */}
        <BrowserRouter>
        {/* Provider, tse komponenta kotra beretsia z biblioteki
        react-redux i potribna dla wykorystania connect w naszomu codi */}
            <Provider store={store}>        
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
