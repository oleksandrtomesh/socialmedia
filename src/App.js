import './App.css';
import {Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/login"render={ () => <Login />} />
          <Route path="/dialogs" render={ () => <DialogsContainer/>} />
          {/* W path zapysujemo "/profile/:userId?" dla withRoute, szczob w 
          objekti match jakyj powertaje funkcja withRout w params zjawywsia id korystuwacza,
          kotryj ja wykorystowuju dla togo szczoby z serwera zaprosyty widpowidni dani
          znak "?" oznaczje, szczo parametr pisla "/profile" opcjonalnyj */}
          <Route path="/profile/:userId?"render={ () => <ProfileContainer />} />
          <Route path="/users" render={ () => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
  );
}



export default App;
