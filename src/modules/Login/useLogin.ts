import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { useState } from 'react';

const useLogin = () => {
  const credential = 'boxlog@boxlog.hr'
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from = location.state?.from?.pathname || '/';

  const [email, setEmail] = useState<string>(credential)
  const [password, setPassword] = useState<string>(credential)

  const handleLogin = async () => {
    
    if(email !== credential || password !== credential) {
      return false
    }
    login(email, password).then(response => {
      navigate(from, { replace: true });
    });
  };

  return {
    email,
    setEmail,
    password, 
    setPassword,
    handleLogin,
  }
}
  
export default useLogin