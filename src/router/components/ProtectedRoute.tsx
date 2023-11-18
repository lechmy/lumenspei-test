import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { ProtectedRouteProps } from '../../types/props/ProtectedRouteProps'
 
 
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAllowed,
  children,
  redirectPath = '/',
}) => {
  const location = useLocation()
 
  if (!isAllowed) {

    return <Navigate to={redirectPath} state={{ from: location }} replace />
  }
 
  return children ?? <Outlet />
}
