import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomizedInputBase from './Inputs/CustomizedInputBase';
import Listsitesitems from './ListItems/Listsitesitems'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
     borderRight: "1px solid white"
        
    }
});

const Sites = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={4} className={classes.root}  >
            <Grid container direction='column' >
                <Grid item >
                    <Box component="span" className="title" >Sites</Box>
                </Grid>
                <Grid item >
                    <CustomizedInputBase 
                        handleContentInput={props.handleContentInput}
                        newContentSubmitHandler={props.newContentSubmitHandler}
                        pendingSiteContent={props.pendingSiteContent} 
                        name="site" 
                        color="SiteAddButtonColor"
                    />
                </Grid>
                <Grid item 
                >
                   <Listsitesitems 
                        removeContent={props.removeContent}
                        sitesList={props.sitesList}
                        name="site"
                   />
                </Grid>
            </Grid>
        </Grid>
    ); 
}

export default Sites;