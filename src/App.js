import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friendsItems={props.state.friendsItems.friendsItems} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => 
          <Dialogs 
            dialogPage={props.state.dialogPage}
            dispatch={props.dispatch} />} />
          <Route path="/profile"render={ () =>
            <Profile 
            profilePage={props.state.profilePage} 
            dispatch={props.dispatch}
            />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
