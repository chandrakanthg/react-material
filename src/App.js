import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';
import MainLayout from './components/layouts/mainLayout';
import { BrowserRouter as Router,} from 'react-router-dom';


function App() {
  return (    
    <MainLayout/>
  );
}

export default App;
