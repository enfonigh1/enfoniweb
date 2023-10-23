import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { auth, authuser, userinfo } from '../app/features/authSlice/authSlice'


const Protected = () => {
    const location = useLocation()

    const user = useSelector(authuser)
    return user?.name ?
        <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}

export default Protected