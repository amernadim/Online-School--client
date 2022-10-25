import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  // Crete User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
 // Update Photo Url and display name
  const updateUserProfile = profile => {
    setLoading(true);
    return updateProfile(auth.currentUser,profile)
  }
  // Sign In With Email and Password
  const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Log Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  // sign in with google 
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  // sing in with github
  const githubSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
       setLoading(false)
    })
    return () => unSubscribe()
  },[])


  const authInfo = { user, createUser, updateUserProfile, signIn , logOut , googleSignIn, githubSingIn,loading}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;