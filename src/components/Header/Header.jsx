import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {

    const onSubmit = () =>{
        props.logout()
    }

    return (
        <header className={styles.header}>
            <div className={styles.login}>
                {props.isAuth 
                    ? <NavLink to={"/profile/"}>{props.authData.login}</NavLink>
                    :<NavLink to='/login'>Login</NavLink>}
                <button onClick={onSubmit}>Logout</button>
            </div>
        </header>
    );
}

export default Header