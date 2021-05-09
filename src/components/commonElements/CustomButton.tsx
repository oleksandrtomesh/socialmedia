import { useStyles } from './componentsStyles';
import { Button } from '@material-ui/core';
import React from 'react';


export const CustomButton: React.FC<PropsType> = ({ children, disabled }) => {

    const classes = useStyles();
    return <Button className={classes.loginButton} type="submit" disabled={disabled} fullWidth>{children}</Button>;
};

type PropsType = {
    children: string
    disabled?: boolean
} 