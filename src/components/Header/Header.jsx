import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="https://logofirmy.net/wp-content/uploads/2020/04/Huawei-Logo-2018%E2%80%93.....jpg">
            </img>
            <div className={styles.login}>
                {props.isAuth ? <NavLink to={"/profile/"}>{props.authData.login}</NavLink>
                    :<NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header