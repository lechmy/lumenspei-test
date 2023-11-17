import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const useResetPassword = () => {
  const navigate = useNavigate();

  const [resetEmail, setResetEmail] = useState<string>('')

  const handleResetPassword = () => {
    navigate('/auth/new-password', { replace: true });
  };

  return {
    resetEmail,
    setResetEmail,
    handleResetPassword,
  }
}
  
export default useResetPassword