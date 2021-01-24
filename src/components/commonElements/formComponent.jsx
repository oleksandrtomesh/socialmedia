import styles from "./formComponent.module.css"

export const FormConstructor = ({input, meta, ...props}) => {
    debugger;
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

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormConstructor {...props}>
            <input {...input} {...restProps} />
        </FormConstructor>
    )
}
