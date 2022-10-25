import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  // Crete User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
 // Update Photo Url and display name
  const updateUserProfile = profile => {
    return updateProfile(auth.currentUser,profile)
  }
  // Sign In With Email and Password
  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Log Out
  const logOut = () => {
    return signOut(auth)
  }

  // sign in with google 
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // sing in with github
  const githubSingIn = () => {
    return signInWithPopup(auth, githubProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser)
    })
    return () => unSubscribe()
  },[])


  const authInfo = { user, createUser, updateUserProfile, signIn , logOut , googleSignIn, githubSingIn}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;