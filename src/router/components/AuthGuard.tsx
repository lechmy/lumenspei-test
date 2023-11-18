import React from 'react'
import { ProtectedRoute } from './ProtectedRoute'
import { useAuth } from '../../providers/Auth'
import { AuthGuardProps } from '../../types/props/AuthGuardProps'
import { AUTH_STATUS } from '../../enums/auth'
 

 
export const AuthGuard: React.FC<AuthGuardProps> = ({
  redirectPath = '/auth/login',
  guardType = AUTH_STATUS.AUTHENTICATED,
  ...props
}) => {
  const { user } = useAuth()
  const isAllowed = guardType === AUTH_STATUS.AUTHENTICATED ? !!user : !user
 
  return (
    <ProtectedRoute
      redirectPath={redirectPath}
      isAllowed={isAllowed}
      {...props}
    />
  )
}
