import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useResetPassword = () => {
  const navigate = useNavigate()

  const [resetEmail, setResetEmail] = useState<string>('')

  const handleResetPassword = () => {
    navigate('/auth/new-password', { replace: true })
  }

  return {
    resetEmail,
    setResetEmail,
    handleResetPassword,
  }
}
  
export default useResetPassword
