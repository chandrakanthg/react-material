import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../login/login';

export default function LoginLayout() {
    return(
        <Login />
    );
}