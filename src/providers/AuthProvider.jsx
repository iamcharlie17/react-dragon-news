/**
 * --------Steps--------
 * 1. create AuthContext and export
 * 2. return AuthContext.Provider
 *      (main.jsx --> <AuthProvider> <RouterProvider router={router} /></AuthProvider>)
 * 3. pass children props into AuthContext Provider
 * 4. pass value
 * 5. use useContext hook to recieve passed value
 * 6. use useState hook
 * 7. import auth from firebase
 * 8. onAuthStateChanged(auth, user =>{
 * setUser(user)
 * })
 */


import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
            setLoading(false)
        });
        return ()=>{
            unSubscribe();
        }
    }, [])

    const registerUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOut = ()=>{
        setLoading(true)
        signOut(auth);
    }

    

    const authInfo = {
        user,
        loading,
        registerUser,
        LogIn,
        LogOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;