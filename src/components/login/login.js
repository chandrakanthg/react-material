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
import { Formik, Form, Field, ErrorMessage, yupToFormErrors, useField } from 'formik';
import * as Yup from 'yup';

import { withStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';
import { Redirect } from 'react-router-dom';

const style = {
    margin: 15,
};
const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        }
    },
    paper: {
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
    invalid_feedback: {
        color: red
    }
});

// class MyCheckBox extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const {label, field, meta} = this.props;
//         return(
//             <FormControlLabel {...field} control={<Checkbox />} label={label} />
//         )
//     }
// }

const MyCheckBox = ({label, ...props}) => {    
    const [field, meta] = useField(props);    
    return(
        <FormControlLabel {...field} control={<Checkbox />}  label={label} />
    )
};

class Login extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     username: '',
        //     password: '',
        //     loginErrors: '',
        //     submitted: false,
        // }
        // this.handleSignIn = this.handleSignIn.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handleSignIn(e) {
    //     e.preventDefault();
    //     const { username, password } = this.state;

    //     console.log('clicked');
    //     console.log(username, password);
    // }

    handleSubmit = (values, actions) => {
        actions.setSubmitting(true)
        console.log(values)
        console.log(actions)
        const { history } = this.props
        history.push('/Home')
    }

    render() {
        const { classes } = this.props;
        // const { submitted } = this.state;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Formik
                        initialValues={{ username: '', password: '', rememberMe: false }}
                        validationSchema={Yup.object().shape({
                            username: Yup.string()
                                .email('Email is invalid')
                                .required('User name is required'),
                            password: Yup.string()
                                .min(6, 'Password must be at least 6 characters')
                                .required('Email is required')
                        })}
                        onSubmit={this.handleSubmit}
                        // onSubmit={(field, {setSubmitting}) => {
                        //     setSubmitting(true);
                        //     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                        //     setSubmitting(false);
                        //     // router.Redirect.to = '/Home';                            
                        //     return <Redirect to="/Home" />;
                        //     // this.handleSignIn()
                        // }}
                        render={({ values, isSubmitting, touched, errors, handleSubmit}) => (
                            <Form className={classes.form} onSubmit={handleSubmit} noValidate>
                                <Field placeholder="Enter user name" variant="outlined" margin="normal" error={touched.username && Boolean(errors.username)}
                                    fullWidth name="username" type="input" as={TextField} />
                                    <ErrorMessage name="username" component="div" />
                                <Field placeholder="Enter password" variant="outlined" margin="normal" error={touched.password && Boolean(errors.password)}
                                    fullWidth name="password" type="password" as={TextField} />
                                    <ErrorMessage name="password" component="div"  />
                                
                                <MyCheckBox name="rememberMe" label="Remember me"  type="checkbox"/>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={isSubmitting}
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
                                <pre>{JSON.stringify(values, null, 2)}</pre>
                            </Form>
                        )}
                    >
                    </Formik>
                </div>
            </Container>
        );
    }
}

export default withStyles(styles)(Login);