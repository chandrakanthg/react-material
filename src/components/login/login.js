import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const style = {
    margin: 15,
};
class Login extends Component {
    constructor(props) {
        super(props);
        this.sate = {
            username: '',
            password: '',
        }
    }

    render() {
        return(
            <div>
                
                <TextField hintText="Enter user name" floatingLabelText="username" onChange={(event, newValue)=> {
                    this.setState({username: newValue})
                }}/>
                <TextField hintText="Enter password" floatingLabelText="password" onChange={(event, newValue)=> {
                    this.setState({password: newValue})
                }}/>
                <Button label="Login" style={style} primary={true} onClick={(event)=> {
                    this.handleClick(event)
                }} />
                
            </div>
        );
    }
}
// const Login = ()=> {
//     console.log('login clicked');
//     return ('Login comp');
// }

export default Login;