import { Field, Form, Formik } from 'formik';
import React from 'react'
import { FilterType } from '../../../redux/users-reducer';


const filterUsersBarValidation = (value: any) => {

}

const FilterUsersBar: React.FC<PropsType> = ({handleFilterSubmit, term}) => {

    const submit = (values: FormValuesType , { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}) => {

        //object to convert string values into boolean in values.friend
        const filter:FilterType  = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false

        }

        //function execute getUsersWithFilter thunk 
        handleFilterSubmit(filter)
        setSubmitting(false);       
    }
    return (<Formik
        initialValues={{ term: term, friend: null }}
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
    term: string
}

type FormValuesType = {
    term: string
    friend: "true" | "null" | "false" | null
}