import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
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



  const authInfo = {user, createUser,updateUserProfile,signIn}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;