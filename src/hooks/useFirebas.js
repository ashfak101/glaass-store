import initializeFirebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,updateProfile ,signOut,getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";



initializeFirebaseAuthentication();


const useFirebase=()=>{
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
    const [authError,setAuthError]=useState('')
    const [admin,setAdmin]=useState(false);
    const [token,setToken]=useState(' ')
    const auth = getAuth();


    const emailPasswordSignUp=(email,password,name,history)=>{
          setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            
                .then((userCredential) => {
                  setAuthError(' ');
                  const newUser={email,displayName:name}
                  setUser(newUser)
                  // Save User to the database
                  saveUserToDb(email,name);
                  updateProfile(auth.currentUser, {
                    displayName: name
                          }).then(() => {
                            // Profile updated!
                            // ...
                          }).catch((error) => {
                            // An error occurred
                            // ...
                          });
                  history.replace('/')
                  // ...
                })
                .catch((error) => {
                 
                  setAuthError(error.message);
                  // ..
                })
                .finally(()=>setLoading(false))
    }
    // -----------Login with email pass
        const loginWithEmailPass=(email,password,location,history)=>{
          setLoading(true)
            signInWithEmailAndPassword(auth, email, password)
           
            .then((userCredential) => {
              // Signed in 
            //   const user = userCredential.user;
            const destination = location?.state?.from || '/';
              // ...
              history.replace(destination)
            })
            .catch((error) => {
            //   const errorCode = error.code;
            //   const errorMessage = error.message;
            })
            .finally(()=>setLoading(false));;
        }


    useEffect(()=>{
      
        const unsubscribe =onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user);
              getIdToken(user)
              .then(idToken=>{setToken(idToken)})
              // ...
            } else {
              // User is signed out
              // ...
              setUser({})
            }
            setLoading(false)
          });
          return()=>unsubscribe;
    },[auth])

    // ----------------------admin
    useEffect(()=>{
      fetch(`https://whispering-plains-47367.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))

    },[user.email])


     // SignOut 
     const logOut=()=>{
        setLoading(true);
              signOut(auth).then(() => {
                  // Sign-out successful.
                }).catch((error) => {
                  // An error happened.
                })
                .finally(()=>setLoading(false));
      }
      const saveUserToDb=(email,displayName)=>{
        const user={email,displayName}
        axios.post('https://whispering-plains-47367.herokuapp.com/users',user)
        .then()
      }
      

    return{
        emailPasswordSignUp,
        user,
        loginWithEmailPass,
        logOut,loading,authError,admin,token
    }

}

export default useFirebase;