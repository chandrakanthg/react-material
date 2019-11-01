import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Content from './content';
import Sidebar from './sidebar';
import Movies from '../movies/movies';
import Login from '../login/login';

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

const Home = ()=> {
    return ('Home comp');
}

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Header onSidebarOpen={handleDrawerOpen} open={open} />
            <Router>
                <Sidebar onSidebarClose={handleDrawerClose} open={open} />
                <Content>                                      
                    <Switch>
                        <Route exact component={Home} path="/" /> 
                        <Route component={Movies} path="/Starred" />
                        <Route component={Login} path="/Inbox" />
                    </Switch>               
                </Content>                
            </Router>            
            {/* <Footer/> */}
        </div>
    )
}