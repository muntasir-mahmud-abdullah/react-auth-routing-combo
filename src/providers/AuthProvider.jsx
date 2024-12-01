import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, {createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const handleRegister = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const handleLogin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const handleSignOut = () => {
            signOut(auth)
            .then(()=>{
                console.log('successfully sign out')
            })
            .catch(error=>console.log(error.message))
    }
    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider);
    }
    // onAuthStateChanged(auth,currentUser=>{
    //     if(currentUser){
    //         console.log('current user logged in',currentUser);
    //         setUser(currentUser);
    //     }
    //     else{
    //         console.log('no user logged in');
    //         setUser(null);
    //     }
    // })
    
    const authInfo = {
        name:'Bangladesh',
        user,
        loading,
        handleRegister,
        handleLogin,
        handleSignOut,
        googleSignIn,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;