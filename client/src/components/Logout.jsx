import React, {useEffect} from "react";
import {useUpdateAuth, useGetAuth} from "../AuthContext";
import apolloClient from "../graphql/client";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";


export default function Logout(){

    const updateAuth = useUpdateAuth();
    const getAuth = useGetAuth();
    let navigateTo = useNavigate();
    useEffect(()=>{
        //updateAuth();
        // if(!getAuth){
        //     updateAuth();
        //     apolloClient.resetStore();
        //     navigateTo('/');
        // }
    });
    function logOut(){
        localStorage.removeItem('auth');
        updateAuth(); // updating auth from the localStorage
        apolloClient.resetStore();
        navigateTo('/');
    }
    return (
        <Button onClick={logOut} color="inherit">Logout</Button>
    )
}