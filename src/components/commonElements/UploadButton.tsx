import { useStyles } from './componentsStyles';
import { Button } from '@material-ui/core';
import React, { ChangeEvent } from 'react';


export const UploadButton: React.FC<UploadButtonPropsType> = ({ onChangeHandler, buttonAssign }) => {

    const classes = useStyles();

    return <label htmlFor="upload-photo">
        <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={onChangeHandler} />
        <Button className={classes.uploadButton} component="span" fullWidth>
            {buttonAssign}
        </Button>
    </label>;
};

export type UploadButtonPropsType ={
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    buttonAssign: string
}
