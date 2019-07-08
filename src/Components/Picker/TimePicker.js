import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'inline',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 40,
  },
}));

export default function TimePickers(props) {
  const classes = useStyles();
  
  return (
      
    <form className={classes.container} noValidate>
     
      <TextField
        id={props.id}
        type="number"
        defaultValue={props.defaultValue}
        className={classes.textField}
        onChange={props.newNumberUpdate}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 1, // 5 min
        }}
      />
    </form>
  );
}
