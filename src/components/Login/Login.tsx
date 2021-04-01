import React from 'react'
import {Form, Field} from 'react-final-form'
import { InputCustom, CustomButton} from '../commonElements/formComponent';
import { composeValidators, maxLengthCreator, required } from '../../utilits/validators';
import { Redirect } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';
import styles from './Login.module.css'
import { PropsFromRedux } from './LoginContainer';



const Login: React.FC<PropsFromRedux> = ({isAuth, captcha, login}) => {

type ValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}

  const onSubmit = async (values: ValuesType) => {
    let error = await login(values);
    if (error !== undefined) {
      return { [FORM_ERROR]: error }
    }
  }

  if (isAuth === true){
    return <Redirect to="/profile" />
  }
  
  
  return(
  <Form
    onSubmit ={onSubmit}
    captcha = {captcha}
    render={({handleSubmit, submitError}) => (
        <div>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.email}>
              <Field<string> name={"email"} component={InputCustom} validate={composeValidators(required, maxLengthCreator(30))}/>
            </div>
            <div>
              <Field<string> name={"password"} component={InputCustom} type="password" validate={composeValidators(required, maxLengthCreator(30))} />
            </div>
            <div>
              <Field<boolean> name={"rememberMe"} component="input" type={"checkbox"} />
              <span>remember me</span>
            </div>
            {captcha &&
              <div> 
                <img src={captcha} alt="captcha"/>
                <Field<string>  name="captcha" component={InputCustom}/>
              </div>}
            {submitError && <div className={styles.error}>{submitError}</div>}
            <div>
            <CustomButton>Login</CustomButton>
              {/* <Button variant="contained" color="primary" type="submit">Login</Button>  */}
            </div>
          </form>

        </div>
      )

    }
  />)
}

export default Login;