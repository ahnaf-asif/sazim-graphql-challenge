import * as React from 'react';
import '../css/login-register.css';

import{
    Link
}from 'react-router-dom';

import {
    Button,
    FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput,
    TextField
} from "@mui/material";
import {
    Visibility,
    VisibilityOff
} from "@mui/icons-material";


export default function Login(){

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className=" flex justify-center items-center" style={{height: '80vh'}}>
            <div className="login">
                <h1 className="text-center text-4xl font-bold">Log In</h1>
                <div className="login-card border border-slate-300 p-5 mt-5">
                    <form>
                        <div className="form-group">
                            <TextField id="email" label="Email" className="w-full" variant="outlined" />
                            <br /> <br />
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
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
                                Don't have any account? <Link class="text-blue-700 font-bold" to="/register">Register here</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}