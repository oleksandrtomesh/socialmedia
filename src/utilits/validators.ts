

export const required = (value: string) => (value ? undefined : 'Required')

//validator to set max length in Field
export const maxLengthCreator = (maxLength: number) => (value: string) => (value && value.length > maxLength 
    ? `Max length is ${maxLength} symbols`
    : undefined )

    //Function compose all validators from final-form
export const composeValidators = (...validators: Array<Function>) => (value: string) => 
        validators.reduce((error, validator) => error || validator(value), undefined);


export const checkError = (error: Array<string>, value: string) => {
    const newValue = value[0].toUpperCase() + value.slice(1);
    return( error && error.map(messages => {
            if(messages.indexOf(newValue) >= 0){
                return messages;
            }
            return undefined;
        }))
    }

