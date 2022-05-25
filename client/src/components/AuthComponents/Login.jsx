import React from 'react';
import '../../css/login-register.css';
import{
    Link
}from 'react-router-dom';

import {
    Alert,
    Button, CircularProgress,
    FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput,
    TextField
} from "@mui/material";

import {
    Visibility,
    VisibilityOff
} from "@mui/icons-material";



import {useMutation} from "@apollo/client";
import LOGIN_USER from "../../graphql/mutations/loginUser"; // mutation for user login

import {useUpdateAuth} from "../../AuthContext"; // Auth Context
import { useNavigate } from 'react-router-dom'; // for routing

export default function Login(){

    // setting initial form data
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    // error handlers
    const [isEmailPassError, setIsEmailPassError] = React.useState(false);
    const [showLoadingIcon, setShowLoadingIcon] = React.useState(false);

    // handles form value changes
    const handleChange = (prop) => (event) => {
        setFormData({ ...formData, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // login user mutation
    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

    const updateAuth = useUpdateAuth(); // updating value in AuthContext
    let navigateTo = useNavigate();

    async function handleLogin(e){

        e.preventDefault();
        setIsEmailPassError(false);
        setShowLoadingIcon(true); // used for showing loading screen

        localStorage.removeItem('auth'); // removing existing login data

        // authenticating via LOGIN_USER mutation
        const auth = await loginUser({
            variables: {
                email: formData.email,
                password: formData.password,
            }
        });
        if(auth.data.loginUser){
            // logged in. setting the auth data in localStorage
            localStorage.setItem('auth', JSON.stringify(auth.data.loginUser));
            updateAuth(); // updating auth context value
            navigateTo('/'); // redirecting to home page
        }else{
            // handling errors
            setShowLoadingIcon(false);
            setIsEmailPassError(true);
        }

    }

    return (
        <div className="flex justify-center items-center" style={{height: '80vh'}}>
            <div className="login">
                <h1 className="text-center text-4xl font-bold">Log In</h1>
                { showLoadingIcon &&
                    <div className="text-center mt-5">
                        <CircularProgress />
                    </div>
                }
                {
                    isEmailPassError &&
                    <Alert severity="error" className="mt-5">Wrong email or password</Alert>
                }
                <div className="login-card border border-slate-300 p-5 mt-5">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <TextField
                                id="email"
                                label="Email"
                                className="w-full"
                                variant="outlined"
                                value={formData.email}
                                type="email"
                                onChange={handleChange('email')}
                                required
                            />
                            <br /> <br />
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={formData.showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    required
                                />
                            </FormControl>
                            <div className="text-center mt-5">
                                <Button
                                    disableElevation
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >Login</Button>
                            </div>
                            <div className="signup-text text-center mt-5">
                                Don't have any account? <Link className="text-blue-700 font-bold" to="/register">Register here</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}