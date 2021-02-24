import styles from "./formComponent.module.css";
import TextField from "@material-ui/core/textfield";
import {useStyles} from './formComponentCustomStyles';
import { Button } from '@material-ui/core';


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
                {...input} 
                {...restProps} />
        </FormConstructor>
    )
}

export const LogButton = (props) => {
    const classes = useStyles()
    return <Button className={classes.LogButton} variant="contained" type="submit">Login</Button> 
}
