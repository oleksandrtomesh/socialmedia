import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import React, { lazy } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { initialized } from './redux/app-reducer';
import Loader from './components/commonElements/loader/loader';
import { Suspense } from 'react';
import { AppStateType } from './redux/redux-store';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Grid } from '@material-ui/core';

//use React.lazy for code-splitting
const DialogsContainer = lazy(() => import('./components/Dialogs/Dialogs'));
const UsersPage = lazy(() => import('./components/Users/Users'));

class App extends React.Component<AppPropsType> {

  componentDidMount = () => {
    this.props.initialized();
  }

  render = () => {
    if (!this.props.initialized) {
      return <Loader />
    }

    return (
    <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item container direction="row" spacing={2}>
          <Grid item sm={1}/>
          <Grid item xs={12} sm={2}>
            <Navbar />
          </Grid>
          <Grid item sm={8}>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/profile" />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/users" render={() => <UsersPage />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
                <Route path="*" render={() => <div>404 NOT FOUND</div>} />
              </Switch>
            </Suspense>
          </Grid>
          <Grid item sm={1}/>
        </Grid>
      </Grid>)
  };
}

let mapDispatchToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized
  }
}

const connector = connect(mapDispatchToProps, { initialized })

export default connector(App);

type AppPropsType = ConnectedProps<typeof connector>