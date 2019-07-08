import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import ButtonwithPlusIcon from '../Buttons/ButtonwithPlusIcon';




const useStyles = makeStyles(
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '80%',
            margin: '5px auto',
        },
        input: {
            marginLeft: 8,
            flex: 1,
        },
    }),
);

export default function CustomizedInputBase(props) {
    const classes = useStyles();
     let pretext = "";
     let pendingContent = "";
    if(props.name === "site"){
        pretext = "Enter your site here";
        pendingContent = props.pendingSiteContent;
    } else if (props.name === "keyword") {
        pretext = "Enter your keyword here";
        pendingContent = props.pendingKeywordContent;
    }

    return (
        <form onSubmit={props.newContentSubmitHandler} name={props.name}> 
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder={pretext}
                onChange={props.handleContentInput}
                value={pendingContent}
                name={props.name}
                
            />
           <ButtonwithPlusIcon 
                name={props.name}
                color={props.color}
           />
        
        </Paper>
        </form>
    );
}
