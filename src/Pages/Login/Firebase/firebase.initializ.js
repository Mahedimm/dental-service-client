import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


// Initialize Firebase
const initializeFirebase = ()=>{
    initializeApp(firebaseConfig);
}

export default initializeFirebase;

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