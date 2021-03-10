import styles from "./formComponent.module.css";
import TextField from "@material-ui/core/textfield";
import {useStyles} from './formComponentCustomStyles';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio'; 
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

export const RadioCustom = (props) => {
    const [selectedValue, setSelectedValue] = React.useState('Yes');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Radio
                checked={selectedValue === 'Yes'}
                onChange={handleChange}
                value="Yes"
                name="lookingForAJobRadio"
                label="Yes"
            />
            <Radio
                checked={selectedValue === 'No'}
                onChange={handleChange}
                value="No"
                name="lookingForAJobRadio"
                label="No"
            />

        </div>
    );
}





export const CustomButton = (props) => {

    const classes = useStyles()
    return <Button className={classes.loginButton} variant="contained" type="submit">{props.children}</Button> 
}
