import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
  const location = useLocation()
  const {user,loading} = useContext(AuthContext)
  if(loading) {
    return <Spinner/>
  }

  if(!user) {
      return <Navigate to ="/login" state={{from : location}} replace></Navigate>  
  }
  return children;
};

export default PrivateRoute;