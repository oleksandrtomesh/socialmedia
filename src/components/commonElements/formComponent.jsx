import styles from "./formComponent.module.css";
import TextField from "@material-ui/core/textfield";
import {useStyles} from './formComponentCustomStyles';
import { Button } from '@material-ui/core';
import React from 'react'

export const FormConstructor = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <span className={styles.formControl + " " + (hasError ? styles.error: "")}>
            {props.children}
            { hasError && <div>{meta.error}</div>}
        </span>
    )
}



export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormConstructor {...props}>
            <textarea {...input} {...restProps} />
        </FormConstructor>
    )
}

export const InputCustom = (props) => {
    const classes = useStyles()
    const {input, meta, children, ...restProps} = props;
    return (
        <FormConstructor {...props}>
            <TextField 
                className={classes.textField}
                variant="outlined"
                color="primary" 
                label={input.name}
                size="small"
                {...input} 
                {...restProps} />
        </FormConstructor>
    )
};

export const CustomButton = (props) => {

    const classes = useStyles()
    return <Button className={classes.LoginButton} variant="contained" type="submit">{props.children}</Button> 
}


export const UploadButton = ({onChangeHandler, buttonAssign, ...props}) => {

    const classes = useStyles()

    return <label htmlFor="upload-photo">
        <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={onChangeHandler}
        />
        <Button className={classes.UploadButton} variant="contained" component="span">
            {buttonAssign}
    </Button>
    </label>
}
