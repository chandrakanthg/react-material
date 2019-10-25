import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './header';
import Footer from './footer';
import Content from './content';
import Sidebar from './sidebar';

const useStyles = makeStyles(theme => ({    
    root: {
        display: 'flex',
    },
    layout: {
        backgroundColor: { color: 'yellow' }
    },
    sidebar: {
        float: 'left'
    }
}));

export default function Layout() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Header onSidebarOpen={handleDrawerOpen} open={open} />
            <Sidebar onSidebarClose={handleDrawerClose} open={open} />
            <Content>             
                <Footer/>
            </Content>
            
            {/* <div>
                <div className={classes.sidebar}><Sidebar onSidebarClose={handleDrawerClose} open={open} /></div>
                <div>
                    <Content/>
                    <Footer/>
                </div>
            </div>             */}
        </div>
    )
}