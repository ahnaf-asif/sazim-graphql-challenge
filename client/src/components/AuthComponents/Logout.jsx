import {useUpdateAuth, useGetAuth} from "../../AuthContext";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";


export default function Logout(){

    const updateAuth = useUpdateAuth(); // for updating auth context value
    const getAuth = useGetAuth(); // getting auth context value
    let navigateTo = useNavigate(); // for redirect

    function logOut(){

        localStorage.removeItem('auth'); // removing auth content
        updateAuth(); // updating auth from the localStorage
        navigateTo('/'); // redirecting
    }
    return (
        <Button onClick={logOut} color="inherit">Logout</Button>
    )
}