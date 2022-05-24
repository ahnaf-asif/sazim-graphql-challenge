import React, {useContext, useEffect} from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Logout from "./AuthComponents/Logout";
import {useGetAuth} from '../AuthContext';


export default function Nav(){

    return (
        <AppBar position="static" sx = {{bgcolor: '#6c7982'}}>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>
                    <Link className="navbar-title text-3xl font-bold" to="/">Tbay</Link>
                </Typography >

                {!useGetAuth()
                    ?(
                        <Button component={Link} to="/login" color="inherit">Login</Button>
                    )
                    :(
                        <>
                            {/*<Button component={Link} to="/product/create" color="inherit">Create Products</Button>*/}
                            <Button component={Link} to="/sack" color="inherit">My Sack</Button>
                            <Logout/>
                        </>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}