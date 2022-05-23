import React, {useContext, useEffect, useState} from "react";

const AuthContext = React.createContext(null)
const AuthUpdateContext = React.createContext(null)

export function useGetAuth(){
    return useContext(AuthContext);
}
export function useUpdateAuth(){
    return useContext(AuthUpdateContext);
}

export default function AuthProvider({ children }){
    const [Auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')));
    function updateAuth(){
        setAuth(JSON.parse(localStorage.getItem('auth')));
        // console.log('updating auth');
    }
    // useEffect(()=>{
    //     // console.log()
    //     // updateAuth();
    //     // setInterval(()=>{
    //     //     updateAuth();
    //     // }, 1000)
    // });
    return (
        <AuthContext.Provider value={Auth}>
            <AuthUpdateContext.Provider value={updateAuth}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}