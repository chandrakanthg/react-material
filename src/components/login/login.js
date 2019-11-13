import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { withStyles } from "@material-ui/core/styles";

const style = {
    margin: 15,
};
const styles = theme=> ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        }
    },
    paper:{
        marginTOp: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
});

class Login extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginErrors: '',
            submitted: false,
        }
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSignIn(e) {
        e.preventDefault();
        const  {username, password} = this.state;
        
        console.log('clicked');
        console.log(username, password);
    }

    render() {
        const { classes } = this.props;
        const { submitted } = this.state;
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline />            
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <ValidatorForm ref="form" className={classes.form} onSubmit= {this.handleSignIn} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"                            
                            fullWidth
                            id="username"
                            label="User name"
                            name="username"
                            autoComplete="username"
                            value = {this.state.username}
                            onChange = {this.handleChange}
                            validators = {['required', 'isEmail']}
                            errorMessages = {['field is required', 'email is not valid']}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value = {this.state.password}
                            onChange = {this.handleChange}
                            validators = {['required']}
                            errorMessages = {['field is required']}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled = {submitted}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </ValidatorForm>                
                </div>
            </Container>
        );
    }
}

export default withStyles(styles)(Login);