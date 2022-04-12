import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.initializ";

initializeFirebase();

const useFirebase = ()=>{
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin,setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
      
    }
    //Registration
    const registerUser = (email,password) =>{
      setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    //update profile
    const profile = (name)=>{
     return updateProfile(auth.currentUser, {
        displayName: name, 
      })
      
    }
    //logIn
    const logIn = (email,password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    //observer User state
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              getIdToken(user).then(token => {
                console.log(token);
                localStorage.setItem('token', token);
              })
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return ()=> unSubscribe;
    },[auth])

    //logout
    const logOut = ()=>{
       setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }

    //save database user info
    const saveUserInfo = (email,displayName,method)=>{
        const  user = {email,displayName};
        fetch('http://localhost:8000/users',{
          method: method,
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }

    useEffect(()=>{
      fetch(`http://localhost:8000/users/${user.email}`)
      .then(res=>res.json())
      .then(data =>setAdmin(data.admin))
    },[user.email])


    return{
        user,setUser,
        admin,
        authError,setAuthError,
        isLoading,setIsLoading,
        signInWithGoogle,
        profile,
        registerUser,
        logOut,
        logIn,
        saveUserInfo,

    }
};

 export default useFirebase;
 
 
 /*
*Steps for authentication
----------------------------
step-1: Initial Setup
! firebase : create project
! create web page
! get configuration 
! initialize firebase
! Enable auth method
-----------------------------
step-2; setup component
! Create login Component
! Create Register Component
! Create Route for Login and register
---------------------------------
step-3: set auth system
! set up sign in method
! set uo sign out method
! user state
! special observer
! return necessary method and state from useFirebase
-----------------------------------
step-4: create auth context  hook (useAuth)
! create a auth context
! create context provider
! set context provider context value
! use Auth provider
! create useAuth Hook
--------------------------------------
step-5: create private route
! create private route 
! set private route
-------------------------------------
step-6: Redirect after login
! after login redirect user to their desired destination
 */