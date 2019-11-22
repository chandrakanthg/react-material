import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';

import Dashboard from './components/layouts/dashboard';
import Login from './components/login/login';

import MainLayout from './components/layouts/mainLayout';
import LoginLayout from './components/layouts/loginLayout';

const AppRoute = ({components: Component, layout: Layout, ...rest})=> (
  <Route {...rest} render={matchProps=> (
    <Layout>
      <Component {...matchProps}></Component>
    </Layout>
  )}>
  </Route>
);
function App() {
  return (
    <Router>
      <AppRoute exact path='/' layout={LoginLayout} component={Login} />
      <AppRoute path='/Home' layout={MainLayout} component={Dashboard}></AppRoute>
      {/* <Redirect from="*" to="/" /> */}
    </Router>
  );
}

export default App;
