import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useStyles } from '../commonElements/formComponentCustomStyles';
import { Button, Toolbar, Typography } from '@material-ui/core';
import avatar from '../../assets/images/avatar.png'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/selectors/usersSelectors';
import { logout } from '../../redux/auth-reducer';
import { getAuthUserProfile } from '../../redux/selectors/authSelectors';
import { AppBar } from '@material-ui/core';

const Header: React.FC = () => {
    const dispatch = useDispatch()

    const authUserProfile = useSelector(getAuthUserProfile)
    const isAuth = useSelector(getIsAuth)


    const classes = useStyles();
    const onSubmit = () =>{
        dispatch(logout())
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={styles.headerText}>Social Network</Typography>
                {isAuth && authUserProfile
                    ? <NavLink to={"/profile/"} className={styles.headerUserData}>
                        <img className={styles.logo} src={authUserProfile.photos?.small !== null ? authUserProfile.photos?.small : avatar} alt="profile"></img>
                        <span>{authUserProfile.fullName}</span>
                    </NavLink>
                    : <NavLink className={styles.headerUserData} to='/login'>
                        <Typography>You are not authorized</Typography>
                    </NavLink>}
                <Button onClick={onSubmit} className={classes.LogoutButton} variant="contained" type="submit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header