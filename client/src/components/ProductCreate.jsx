import {useUpdateAuth} from "../AuthContext";
import {useEffect} from "react";


export default function ProuctCreate(){
    const updateAuth = useUpdateAuth();
    useEffect(()=>{
        updateAuth();
    }, []);
    return (
        <>
            hello
        </>
    )
}