import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const nameCustomer = useSelector(state => state.nameCustomer)

  if(nameCustomer) {
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes