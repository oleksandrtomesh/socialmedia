import { Field, Form, Formik } from 'formik';
import React from 'react'
import { FilterType } from '../../../redux/users-reducer';


const filterUsersBarValidation = (value: any) => {

}

const FilterUsersBar: React.FC<PropsType> = ({handleFilterSubmit, filter}) => {

    const submit = (values: FormValuesType , { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}) => {

        //object to convert string values into boolean in values.friend
        const filterBoolean: FilterType  = {
            term: values.term,
            friend: values.friend === 'false' ? false : values.friend === 'true' ? true : null
        }

        //function execute getUsersWithFilter thunk 
        handleFilterSubmit(filterBoolean)
        setSubmitting(false);       
    }
    return (<Formik
        initialValues={{ term: filter.term, friend: String(filter.friend) as Friend }}
        validate={filterUsersBarValidation}
        onSubmit={submit}
    >
        {({ isSubmitting }) => (
            <Form>
                <Field type='text' name='term' placeholder="Provide filter query" />
                <Field as='select' name='friend' >
                    <option value="null">All users</option>
                    <option value="true">Only followed</option>
                    <option value="false">Only unfollowed</option>
                </Field>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
    </Formik>)

}

export default FilterUsersBar

type PropsType = {
    handleFilterSubmit: (filter: FilterType) => void
    filter: FilterType
}

type Friend = "true" | "null" | "false"
type FormValuesType = {
    term: string
    friend: Friend
}