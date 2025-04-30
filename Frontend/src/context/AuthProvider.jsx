import React, { createContext, useContext, useState } from 'react'

// import AuthContext from '../context/AuthContext'


export const  AuthContext = createContext();

export default function AuthProvider({children}){
    let initialAuthUser = localStorage.getItem('Users')
    let [authUser, setAuthUSer] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )

    return(
        <AuthContext.Provider value={[authUser, setAuthUSer]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext);