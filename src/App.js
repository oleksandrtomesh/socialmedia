import './App.css';
import {Redirect, Route, Switch } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { initialized } from './redux/app-reducer';
import Loader from './components/commonElements/loader/loader';
import { Suspense } from 'react';

//use React.lazy for code-splitting
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import ('./components/Users/UsersContainer'));

class App extends React.Component {

  componentDidMount = () => {
    this.props.initialized();
  }

  render = () => {
      if(!this.props.initialized){
        return <Loader />
      }

      return <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Suspense fallback={<Loader/>}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/profile"/>} />
              <Route path="/login" render={ () => <LoginContainer />} />
              <Route path="/users" render={ () => <UsersContainer />} />
              <Route path="/dialogs" render={ () => <DialogsContainer />} />
              <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
            </Suspense>
        </div>
      </div>
  };
}

let  mapDispatchToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}



export default connect(mapDispatchToProps, {initialized})(App);
