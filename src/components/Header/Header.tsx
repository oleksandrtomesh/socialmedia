import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useStyles } from '../commonElements/formComponentCustomStyles';
import { Button } from '@material-ui/core';
import avatar from '../../assets/images/avatar.png'
import React from 'react';
import { HeaderPropsType } from './HeaderContainer';

const Header: React.FC<HeaderPropsType> = ({logout, userProfile, isAuth}) => {
    const classes = useStyles();
    const onSubmit = () =>{
        logout()
    }

    return (

        <header className={styles.header}>
            <div className={styles.login}>
                {isAuth && userProfile
                    ? <NavLink to={"/profile/"}>
                        <img src={userProfile.photos?.small !== null ? userProfile.photos?.small : avatar } alt="profile"></img>
                        <span>{userProfile.fullName}</span>
                    </NavLink>
                    :<NavLink to='/login'>Login</NavLink>}
                <Button onClick={onSubmit} className={classes.LogoutButton} variant="contained" type="submit">Logout</Button>
            </div>
        </header>
    );
}

export default Header