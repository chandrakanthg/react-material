import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getThemeProps } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const useStyles = makeStyles(theme => ({    
    content: {                
        flexGrow: 1,
        padding: theme.spacing(3),
        // flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    mainContent: {
        height: '96%'
    },
}));


export default function Content(props) {
    const classes = useStyles();
    return (
        <main className={classes.content}>           
            <div className={classes.toolbar} />
            <div className={classes.mainContent} >
                {props.children}
            </div>            
        </main>        
    )
}