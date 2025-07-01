import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
export const AuthContext = createContext();
function AuthProvide({children}) {
    const intialAuthUser = localStorage.getItem("Users");
    const [authUser , setAuthUser] = useState(
        intialAuthUser ? JSON.parse(intialAuthUser) : undefined
    )
    return(
        <AuthContext.Provider value = {[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContext); // custom hook
export default AuthProvide;
