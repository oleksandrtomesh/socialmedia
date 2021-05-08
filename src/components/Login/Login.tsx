import React from 'react'
import {Form, Field} from 'react-final-form'
import { InputCustom } from "../commonElements/InputCustom";
import { CustomButton } from "../commonElements/CustomButton";
import { composeValidators, maxLengthCreator, required } from '../../utilits/validators';
import { Redirect } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';
import styles from './Login.module.css'
import { getIsAuth } from '../../redux/selectors/usersSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { login } from '../../redux/auth-reducer';



const Login: React.FC = () => {

  const isAuth = useSelector(getIsAuth)
  const captcha = useSelector((state: AppStateType) => state.authorization.captcha)

  const dispatch = useDispatch()



  const onSubmit = async (values: ValuesType) => {
    let error = await dispatch(login(values));
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

type ValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}