/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from 'axios';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    
//dark mode light mode system build
 const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

    // regsiter system by firebase
    const regsiter = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with email and password by firebase
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //login with google by firebase
    const googleLogin = () => {
        setLoader(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }
    //logout system by firebase

    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        regsiter,
        login,
        user,
        setUser,
        logOut,
        googleLogin,
        loader,
        darkMode,
        setDarkMode
      


    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, async user => {
            if(user?.email){
                setUser(user)
                const {data} = await axios.post(`${import.meta.env.VITE_localURL}/jwt`,{email:user?.email},{withCredentials:true})
            }
            else{
                setUser(user)
                const {data} =  await axios.get(`${import.meta.env.VITE_localURL}/tokenLogout`,{withCredentials:true})
            }
            setLoader(false)
        })
        return () => {
            return unsubcribe()
        }
        
       
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

    );
};

export default AuthProvider;