import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useStyles } from '../commonElements/formComponentCustomStyles';
import { Button } from '@material-ui/core';
import avatar from '../../assets/images/avatar.png'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/selectors/usersSelectors';
import { logout } from '../../redux/auth-reducer';
import { getAuthUserProfile } from '../../redux/selectors/authSelectors';

const Header: React.FC = () => {
    const dispatch = useDispatch()

    const authUserProfile = useSelector(getAuthUserProfile)
    const isAuth = useSelector(getIsAuth)


    const classes = useStyles();
    const onSubmit = () =>{
        dispatch(logout())
    }

    return (

        <header className={styles.header}>
            <div className={styles.login}>
                {isAuth && authUserProfile
                    ? <NavLink to={"/profile/"}>
                        <img src={authUserProfile.photos?.small !== null ? authUserProfile.photos?.small : avatar } alt="profile"></img>
                        <span>{authUserProfile.fullName}</span>
                    </NavLink>
                    :<NavLink to='/login'>You are not authorized</NavLink>}
                <Button onClick={onSubmit} className={classes.LogoutButton} variant="contained" type="submit">Logout</Button>
            </div>
        </header>
    );
}

export default Header