import {useGetAuth, useUpdateAuth} from "../AuthContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export default function ProuctCreate(){
    const updateAuth = useUpdateAuth();
    const auth = useGetAuth();
    let navigateTo = useNavigate();
    useEffect(()=>{
        updateAuth();
        if(!auth){
            navigateTo('/');
        }
    }, []);


    return (
        <>
            hello
        </>
    )
}