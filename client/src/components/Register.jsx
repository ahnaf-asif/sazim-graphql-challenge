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


export default function Register(){

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
        <div className=" flex justify-center items-center" style={{minHeight: '80vh'}}>
            <div className="register mt-5">
                <h1 className="text-center text-4xl font-bold">Register</h1>
                <div className="register-card border border-slate-300 p-5 mt-5">
                    <form>
                        <div className="form-group">
                            <div className="flex justify-between">
                                <TextField  id="firstName" label="First Name" className="input-pair" variant="outlined" />
                                <TextField  id="firstName" label="Last Name" className="input-pair" variant="outlined" />
                            </div>
                            <br/>
                            <TextField  id="address" label="Address" className="w-full" variant="outlined" />
                            <br/><br/>
                            <TextField id="email" label="Email" className="w-full" variant="outlined" />
                            <br/><br/>
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
                            <br/><br/>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="password confirmation">Confirm Password</InputLabel>
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
                                    label="Confirm Password"
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
                                Already registered? <Link class="text-blue-700 font-bold" to="/loginUser">Login here</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}