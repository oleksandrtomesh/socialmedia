import {Form, Field} from 'react-final-form'
import { Input } from '../commonElements/formComponent';
import { composeValidators, maxLengthCreator, required } from '../../utilits/validators';
import { Redirect } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';





const Login = (props) => {
  
  const onSubmit = values => {
    let promise = props.login(values);
    if(props.errorSubmitMessage !== undefined) {
      return {[FORM_ERROR]: props.errorSubmitMessage}
  }
  }

  if (props.isAuth === true){
    return <Redirect to="/profile" />
  }
  
  return(
  <Form
    onSubmit ={onSubmit}
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
            {submitError && <div>{submitError}</div>}
            <div>
              <button type="submit">Login</button>
            </div>
          </form>

        </div>
      )

    }
  />)
}

export default Login;