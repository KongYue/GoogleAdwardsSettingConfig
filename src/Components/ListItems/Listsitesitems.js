import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        listStyle: 'none',
        padding: '0',

    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1px 3px',
        border: '1px solid white',

    }
});
const Listsitesitems = props => {
    
         const classes = useStyles();
    return (
        <ul >
            {props.sitesList.map(
                (site, index) => <li key={site.id} className={classes.item}><Box component='span'>{site.name}</Box><Button onClick={() => props.removeContent(site.id, "site")}> Clear</Button></li>
            )}
        </ul>
    );
    
};


export default Listsitesitems;