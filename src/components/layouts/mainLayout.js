import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({    
    root: {
        display: 'flex',
    },
    layout: {
        flexWrap: 'wrap'
    },
    sidebar: {
        float: 'left'
    }
}));

export default function MainLayout() {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            {this.props.children}
        </React.Fragment>
    )
}