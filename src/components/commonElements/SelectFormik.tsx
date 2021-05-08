import { Select } from '@material-ui/core';
import React from 'react';


export const SelectFormik: React.FC<{ name: string; }> = (props) => {

    return (
        <Select variant="outlined" name={props.name}>
            <option value="null">All users</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
        </Select>

    );
};
