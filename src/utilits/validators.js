

export const required = value => (value ? undefined : 'Required')

//robymo validator max length creator jak zamykania i wyzywaju jogo w  Field peredajuczy 
//jaka moe buty maksymalna dorzyna pola wwodu
export const maxLengthCreator = (maxLength) => (value) => (value && value.length > maxLength 
    ? `Max length is ${maxLength} symbols`
    : undefined )

    //Function compose all validators from final-form
    //tsia funkcja po czerzi wyklykaje validatory i prokyduje w nych za dopomogoju zamykania value z formy
export const composeValidators = (...validators) => value => 
        validators.reduce((error, validator) => error || validator(value), undefined);