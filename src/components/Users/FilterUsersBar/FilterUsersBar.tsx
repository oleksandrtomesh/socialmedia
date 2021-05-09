import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import { Field, Form, Formik, useFormik } from 'formik';
import React from 'react'
import { FilterType } from '../../../redux/users-reducer';
import { CustomButton } from '../../commonElements/CustomButton';


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

    const formik = useFormik({
        initialValues: {
            term: filter.term,
            friend: String(filter.friend) as Friend,
        },
        //validationSchema: validationSchema,
        onSubmit: submit
    })
    return (
        
        <form onSubmit={formik.handleSubmit}>
            <Paper square style={{padding: '1rem'}}>
                <Grid container direction='row' spacing={2}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id='term'
                            name='term'
                            label='Provide filter query'
                            size='small'
                            variant='outlined'
                            color='primary'
                            fullWidth
                            value={formik.values.term}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl variant="outlined" fullWidth size='small'>
                            <InputLabel id="friend">Filter following users</InputLabel>
                            <Select
                                labelId="friend"
                                id="selects"
                                value={formik.values.friend}
                                onChange={formik.handleChange('friend')}
                                label='Filter following users'
                            >
                                <MenuItem value='null'>All users</MenuItem>
                                <MenuItem value='true'>Only followed</MenuItem>
                                <MenuItem value='false'>Only unfollowed</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CustomButton>
                            Submit
            </CustomButton>
                    </Grid>
                </Grid>
            </Paper>
        </form>
        
    )

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