import {Form, Field} from 'react-final-form'
import { Input } from '../commonElements/formComponent';
import { composeValidators, maxLengthCreator, required } from '../../utilits/validators';
import { Redirect } from 'react-router-dom';





const Login = (props) => {
  
  const onSubmit = (values) => {
    props.login(values);
  }

  if (props.isAuth === true){
    return <Redirect to="/profile" />
  }
  
  return(
  <Form
    onSubmit ={onSubmit}
    render={({handleSubmit, invalid})=> (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <Field name={"email"} component={Input} validate={composeValidators(required, maxLengthCreator(30))}/>
            </div>
            <div>
              <Field name={"password"} component={Input} type="password" validate={composeValidators(required, maxLengthCreator(30))} />
            </div>
            <div>
              <Field name={"rememberMe"} component={"input"} type={"checkbox"} />
              <span>remember me</span>
            </div>
            <div>
              <button type="submit" disabled={invalid}>Login</button>
            </div>
          </form>

        </div>
      )

    }
  />)
}

export default Login;