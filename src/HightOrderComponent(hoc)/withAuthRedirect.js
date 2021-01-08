import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//tut stworuju okremyj mapStateToProps i prokyduju wlastywist isAuth z state
//szczob okremo ne prokyduwaty w konrzij komponenti
let mapStateToPropsForRedirect = (state) =>{
    debugger;
    return {
        isAuth: state.authorization.isAuth
    }
}

//stworiujemo HOC w jaku peredajemo naszu zwyklu komponentu, szczob dodaty do
//nej redirect
const withAuthRedirect = (Component) => {

    //wseredyni HOC stworiuju klasowu komponentu kotra renderyt redirect, jakszo isAuth = false
    //abo Component
    class RedirectComponent extends React.Component {

        render(){
            if (!this.props.isAuth) return (<Redirect to="/login"/>)

            return <Component {...this.props} />
        }
    }
    //Obertajemo clasowu componentu connect, i prokydajemo w nei propsamy isAuth, szczob ne robyty tse w 
    //konij komponenti okremo
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    //powertajemo wrze zakonekczenu komponentu z redirektom
    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;