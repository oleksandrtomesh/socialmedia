import { TextField } from '@material-ui/core';
import React from 'react';

//material UI for Formik

export const InputFormik: React.FC<InputFormikPropsType> = (props) => {
    return (
        <TextField
            variant="outlined"
            color="primary"
            label={props.name}
            size="small" />
    );
};

export type InputFormikPropsType = {
    name: string
}