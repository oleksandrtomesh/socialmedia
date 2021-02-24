import {Form, Field} from 'react-final-form'
import { InputCustom, LogButton} from '../commonElements/formComponent';
import { composeValidators, maxLengthCreator, required } from '../../utilits/validators';
import { Redirect } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';
import styles from './Login.module.css'
import { Button } from '@material-ui/core';



const Login = (props) => {

  const onSubmit = async values => {
    let error = await props.login(values);
    if (error !== undefined) {
      return { [FORM_ERROR]: error }
    }
  }

  if (props.isAuth === true){
    return <Redirect to="/profile" />
  }
  
  
  return(
  <Form
    onSubmit ={onSubmit}
    captcha = {props.captcha}
    validate={values => {
      const errors = {}
      if (!values.email) {
        errors.email = 'Required'
      }
      if (!values.password) {
        errors.password = 'Required'
      }
      return errors
    }}
    render={({handleSubmit, invalid, submitError, ...props})=> (
        <div>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div>
              <Field name={"email"} component={InputCustom} validate={composeValidators(required, maxLengthCreator(30))}/>
            </div>
            <div>
              <Field name={"password"} component={InputCustom} type="password" validate={composeValidators(required, maxLengthCreator(30))} />
            </div>
            <div>
              <Field name={"rememberMe"} component="input" type={"checkbox"} />
              <span>remember me</span>
            </div>
            {props.captcha &&
              <div> 
                <img src={props.captcha } alt="captcha"/>
                <Field name="captcha" component={InputCustom}/>
              </div>}
            {submitError && <div className={styles.error}>{submitError}</div>}
            <div>
            <LogButton>Login</LogButton>
              {/* <Button variant="contained" color="primary" type="submit">Login</Button>  */}
            </div>
          </form>

        </div>
      )

    }
  />)
}

export default Login;