import { useStyles } from './componentsStyles';
import { TextField } from '@material-ui/core';
import React from 'react';
import { FieldRenderProps } from "react-final-form";



export const InputCustom: React.FC<FieldRenderProps<any>> = (props) => {

    const classes = useStyles();
    const { input, meta, children, ...restProps } = props;
    return (
        <TextField
            className={classes.textField}
            variant="outlined"
            color="primary"
            label={input.name}
            size="small"
            error={meta.error && meta.touched}
            helperText={meta.touched ? meta.error : undefined}
            {...input}
            {...restProps} />
    );
};
