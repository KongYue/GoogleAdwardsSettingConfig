import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();    
  let CheckboxGroupDetail = props.CheckboxGroupDetail;
  let newCheckboxGroupUpdate = props.newCheckboxGroupUpdate;
  let CheckboxGroupName = props.CheckboxGroupName;
  function creatingCheckbox() {
    var rows = [];
    for (var property in CheckboxGroupDetail) {
      if (CheckboxGroupDetail.hasOwnProperty(property)) {
      rows.push (
        <FormControlLabel
        control={<Checkbox checked={CheckboxGroupDetail[property]} onChange={newCheckboxGroupUpdate(CheckboxGroupName,property)} value={property} />}
        label={property}
      />
      );
      }
    }
    return rows;
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup row>
          {creatingCheckbox()}
        </FormGroup>
      </FormControl>
  </div>
  );
}
