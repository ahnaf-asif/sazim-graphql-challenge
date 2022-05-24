import * as React from 'react';
import '../../css/login-register.css';

import{
    Link
}from 'react-router-dom';

import {
    Alert,
    Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField
} from "@mui/material";
import {
    Visibility, VisibilityOff
} from "@mui/icons-material";

import REGISTER_USER from "../../graphql/mutations/registerUser";
import {useMutation} from "@apollo/client";
import {useUpdateAuth} from "../../AuthContext";

import { useNavigate } from 'react-router-dom';

export default function Register(){

    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
    });
    const [formError, setFormError] = React.useState(false);
    const [formErrorText, setFormErrorText] = React.useState('');
    const [showLoadingIcon, setShowLoadingIcon] = React.useState(false);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

    const updateAuth = useUpdateAuth();
    let navigateTo = useNavigate();

    async function handleRegister(event){
        setFormError(false);
        setFormErrorText('');
        setShowLoadingIcon(true);

        event.preventDefault();

        if(values.password !== values.confirmPassword){
            setShowLoadingIcon(false);
            setFormError(true);
            setFormErrorText('Passwords must match');
        }else {
            try{
                const auth = await registerUser({
                    variables: {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        address: values.address,
                        email: values.email,
                        password: values.password,
                        phone: values.phone,
                    }
                });
                setShowLoadingIcon(false);
                localStorage.removeItem('auth');
                localStorage.setItem('auth', JSON.stringify(auth.data.registerUser));
                updateAuth();
                navigateTo('/');
            }catch(error){
                setShowLoadingIcon(false);
                setFormError(true);
                setFormErrorText(error.message);
                console.log(error.message);
            }
        }
    }

    return (
        <div className=" flex justify-center items-center" style={{minHeight: '80vh'}}>
            <div className="register mt-5">
                <h1 className="text-center text-4xl font-bold">Register</h1>
                { showLoadingIcon &&
                    <div className="text-center mt-5">
                        <CircularProgress />
                    </div>
                }
                {
                    formError &&
                    <Alert severity="error" className="mt-5">{formErrorText}</Alert>
                }
                <div className="register-card border border-slate-300 p-5 mt-5">
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <div className="flex justify-between">
                                <TextField
                                    id="firstName"
                                    label="First Name"
                                    className="input-pair"
                                    variant="outlined"
                                    value={values.firstName}
                                    onChange={handleChange('firstName')}
                                    required
                                />
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    className="input-pair"
                                    variant="outlined"

                                    value={values.lastName}
                                    onChange={handleChange('lastName')}
                                    required
                                />
                            </div>
                            <br/>
                            <TextField
                                id="address"
                                label="Address"
                                className="w-full"
                                variant="outlined"
                                value={values.address}
                                onChange={handleChange('address')}
                                required
                            />
                            <br/><br/>
                            <TextField
                                id="email"
                                label="Email"
                                className="w-full"
                                variant="outlined"
                                value={values.email}
                                onChange={handleChange('email')}
                                required
                            />
                            <br/><br/>
                            <TextField
                                id="phone"
                                label="phone"
                                className="w-full"
                                variant="outlined"
                                value={values.phone}
                                onChange={handleChange('phone')}
                                required
                            />
                            <br/><br/>

                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    required
                                />
                            </FormControl>
                            <br/><br/>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="password confirmation">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="confirm-password"
                                    type={values.showConfirmPassword ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Confirm Password"
                                    required
                                />
                            </FormControl>
                            <div className="text-center mt-5">
                                <Button
                                    disableElevation
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >Register</Button>
                            </div>
                            <div className="signup-text text-center mt-5">
                                Already registered? <Link className="text-blue-700 font-bold" to="/loginUser">Login here</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}