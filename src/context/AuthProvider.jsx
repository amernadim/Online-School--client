import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = profile => {
    return updateProfile(auth.currentUser,profile)
  }

  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser)
    })
    return () => unSubscribe()
  },[])


  const authInfo = { user, createUser, updateUserProfile, signIn }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;