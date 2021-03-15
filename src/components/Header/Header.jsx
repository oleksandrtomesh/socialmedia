import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useStyles } from '../commonElements/formComponentCustomStyles';
import { Button } from '@material-ui/core';

const Header = (props) => {
    const classes = useStyles();
    const onSubmit = () =>{
        props.logout()
    }

    return (

        <header className={styles.header}>
            <div className={styles.login}>
                {props.isAuth && props.userProfile
                    ? <NavLink to={"/profile/"}><span>{props.userProfile.fullName}</span></NavLink>
                    :<NavLink to='/login'>Login</NavLink>}
                <Button onClick={onSubmit} className={classes.LogoutButton} variant="contained" type="submit">Logout</Button>
            </div>
        </header>
    );
}

export default Header