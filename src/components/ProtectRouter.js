import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from './Context/UserAuthContext'

const ProtectedRoute = ({children}) => {

  if(localStorage.getItem("auth") == undefined){ 
       return <Navigate to="/" />
  }
  return children
}

export default ProtectedRoute