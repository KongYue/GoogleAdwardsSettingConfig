import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
        fab: {
            marginRight: '5px'
        },
        KeywordAddButtonColor: {
            backgroundColor: "blue"
        },
        SiteAddButtonColor: {
            backgroundColor: "green"
        }
    });

const ButtonwithPlusIcon = props => {
    const classes = useStyles();
    return (
        <Button size='small'  variant="contained" className={classes[props.color]} type="submit" value="submit" name={props.name}>
            <Fab color="primary" aria-label="Add" className={classes.fab} size="small" >
                <AddIcon />
            </Fab>
            Add
        </Button>

    );
};


export default ButtonwithPlusIcon;