import {useUpdateAuth} from "../AuthContext";
import {useEffect} from "react";

export default function ProductEdit(){
    const updateAuth = useUpdateAuth();
    useEffect(()=>{
        updateAuth();
    }, []);
   return (
       <>

       </>
   )
}