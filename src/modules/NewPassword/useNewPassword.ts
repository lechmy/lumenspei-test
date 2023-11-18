import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const useNewPassword = () => {
  const navigate = useNavigate()

  const [newPassword, setNewPassword] = useState<string>('')
  const [repeatedPassword, setRepeatedPassword] = useState<string>('')

  const handleResetPassword = () => {
    if(newPassword !== repeatedPassword || newPassword === '') {
      return false
    }
    navigate('/', { replace: true })
  }

  return {
    newPassword,
    repeatedPassword,
    setNewPassword,
    setRepeatedPassword,
    handleResetPassword,
  }
}
  
export default useNewPassword
