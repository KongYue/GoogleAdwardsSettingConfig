import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomizedInputBase from './Inputs/CustomizedInputBase';
import ListItems from './ListItems/ListItems';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
     borderRight: "1px solid white"
        
    }
});
const Keywords = (props) => {
    const classes = useStyles();
        return (
            <Grid item xs={4} className={classes.root}>
            <Grid container  direction='column'  >
                <Grid item  >
                    <Box component="span" className="title">Keywords</Box>
                </Grid>
                <Grid item >
                    <CustomizedInputBase 
                        handleContentInput={props.handleContentInput}
                        pendingKeywordContent={props.pendingKeywordContent}
                        newContentSubmitHandler={props.newContentSubmitHandler}
                        name="keyword"
                        color="KeywordAddButtonColor"
                    />
                </Grid>
                <Grid item  >
                    < ListItems 
                        keywordsList={props.keywordsList}
                        removeContent={props.removeContent}
                        name="keyword"
                    />
                </Grid>
            </Grid>
        </Grid>
        );
    };

export default Keywords;