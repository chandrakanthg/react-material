import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Content from './content';
import Sidebar from './sidebar';
import Movies from '../movies/movies';

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
    return (`Home comp fdsfa saffffffffffffff 
    saf
    f
    sd
    sd
    sds
    ds
    ds
    dsd
    sdsdsds
    sds
    ds
    dsds
    ds
    d
    sd
    sd
    sd
    d
    s
    ds
    ds
    d
    f`);
}

export default function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    console.log(props, 'side');
    return (
        <div className={classes.root}>
            <Header onSidebarOpen={handleDrawerOpen} open={open} />
            <Router>
                <Sidebar onSidebarClose={handleDrawerClose} open={open} {...props}/>
                <Content>                                      
                    <Switch>
                        <Route exact component={Home} path={props.match.url }  /> 
                        <Route component={Movies} path= {props.match.url + '/Starred'} />  
                        <Route component={() => <div>Inox Page</div>} path= {props.match.url + '/Inbox'} />  
                        <Route component={() => <div>404</div>} path="*" />                                             
                    </Switch>               
                </Content>                
            </Router>            
            {/* <Footer/> */}
        </div>
    )
}