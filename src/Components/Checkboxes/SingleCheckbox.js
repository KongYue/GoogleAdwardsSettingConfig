
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const SingleCheckbox = props => {
    return (
        <Checkbox 
        checked={props.checked}
        id={props.id}
        onChange={props.newCheckboxUpdate}
        
        />
    );
};

export default SingleCheckbox;