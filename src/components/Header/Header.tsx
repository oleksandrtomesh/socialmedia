import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useStyles } from '../commonElements/formComponentCustomStyles';
import { Button } from '@material-ui/core';
import avatar from '../../assets/images/avatar.png'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../redux/selectors/profileSelectors';
import { getIsAuth } from '../../redux/selectors/usersSelectors';
import { logout } from '../../redux/auth-reducer';

const Header: React.FC = () => {
    const dispatch = useDispatch()

    const userProfile = useSelector(getUserProfile)
    const isAuth = useSelector(getIsAuth)


    const classes = useStyles();
    const onSubmit = () =>{
        dispatch(logout())
    }

    return (

        <header className={styles.header}>
            <div className={styles.login}>
                {isAuth && userProfile
                    ? <NavLink to={"/profile/"}>
                        <img src={userProfile.photos?.small !== null ? userProfile.photos?.small : avatar } alt="profile"></img>
                        <span>{userProfile.fullName}</span>
                    </NavLink>
                    :<NavLink to='/login'>You are not authorized</NavLink>}
                <Button onClick={onSubmit} className={classes.LogoutButton} variant="contained" type="submit">Logout</Button>
            </div>
        </header>
    );
}

export default Header