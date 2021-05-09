import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    navBarTypography: {
        fontSize: '19px'
    }
})

export const NavbarTypography: React.FC<PropsType> = ({children}) => {
    const classes = useStyles()

    return <Typography variant='overline' component='p' className={classes.navBarTypography}>
                {children}
            </Typography>
}

type PropsType = {
    children: string
}