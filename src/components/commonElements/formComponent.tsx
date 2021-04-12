//import styles from "./formComponent.module.css";
import {useStyles} from './formComponentCustomStyles';
import { Button, Select, TextField} from '@material-ui/core';
import React, { ChangeEvent } from 'react'; 
import {FieldRenderProps} from "react-final-form";


export const InputCustom: React.FC<FieldRenderProps<any>> = (props) => {

    const classes = useStyles()
    const {input, meta, children, ...restProps} = props;
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
    )
};

type PropsType = {
    children: string
}

export const CustomButton: React.FC<PropsType> = ({children}) => {

    const classes = useStyles()
    return <Button className={classes.LoginButton} variant="contained" type="submit">{children}</Button> 
}

type UploadButtonPropsType ={
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    buttonAssign: string
}

export const UploadButton: React.FC<UploadButtonPropsType> = ({onChangeHandler, buttonAssign}) => {

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

//material UI for Formik

export const InputFormik: React.FC<InputFormikPropsType> = (props) => {
    return (
        <TextField
            variant="outlined"
            color="primary" 
            label={props.name}
            size="small"
        />
    )
}

export const SelectFormik: React.FC<{name: string}> = (props) => {

    return (
        <Select variant="outlined" name={props.name}>
            <option value="null">All users</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
        </Select>

    )
}

type InputFormikPropsType = {
    name: string
}