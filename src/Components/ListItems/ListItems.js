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
const ListItems = (props) => {
   const classes = useStyles();
    return (
       <ul className={classes.root}>
            {props.keywordsList.map(
                (keyword, index) => <li key={keyword.id} className={classes.item}><Box component='span'>{keyword.name}</Box><Button onClick={() => props.removeContent(keyword.id, "keyword")}> Clear</Button></li>
            )}
    </ul>
    );
}

export default ListItems;