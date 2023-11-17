import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const useRegister = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')

  const handleRegister = async () => {
    navigate('/auth/login', { replace: true });
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail, 
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    handleRegister,
  }
}
  
export default useRegister