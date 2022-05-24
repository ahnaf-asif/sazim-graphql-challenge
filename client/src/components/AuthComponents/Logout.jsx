import React, {useEffect} from "react";
import {useUpdateAuth, useGetAuth} from "../../AuthContext";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";


export default function Logout(){

    const updateAuth = useUpdateAuth();
    const getAuth = useGetAuth();
    let navigateTo = useNavigate();

    function logOut(){
        // localStorage.setItem('auth', {id: null});
        localStorage.removeItem('auth');
        updateAuth(); // updating auth from the localStorage
        // apolloClient.resetStore();
        navigateTo('/');
    }
    return (
        <Button onClick={logOut} color="inherit">Logout</Button>
    )
}