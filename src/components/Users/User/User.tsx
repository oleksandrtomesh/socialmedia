import React from 'react';
import userPhoto from "../../../assets/images/avatar.png";
import { NavLink } from 'react-router-dom';
import { UsersType } from '../../../redux/users-reducer'
import { Button, Grid, Paper } from '@material-ui/core';
import { useStyles } from './UserStyles';
import { Typography } from '@material-ui/core';

type PropsType = {
    user: UsersType
    followingInProgress: Array<number>
    toggleFollowingUser: (userId: number, followed: boolean) => void
}

let User: React.FC<PropsType> = ({user , followingInProgress, toggleFollowingUser}) => {

    const classes = useStyles()
    return (
        <Grid container direction="column" justify="center" className={classes.containerGrid}>
        <Paper className={classes.paper} square>
            <div> 
                <NavLink to={"/profile/" + user.id}>
                    <img alt="small avatar" className={classes.userPhoto}
                        src={user.photos.small !== null ? user.photos.small : userPhoto} />
                </NavLink>
            </div>
            <div>
                <Typography noWrap className={classes.userName}>{user.name}</Typography>
                {/* <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div> */}
            </div>
            <div>
                <Button
                    className={classes.button}
                    fullWidth
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { toggleFollowingUser(user.id, user.followed) }}
                >
                    {user.followed ? "Unfollow" : "Follow"}
                </Button>
            </div>
        </Paper>
        </Grid>
    
    )

}

export default User