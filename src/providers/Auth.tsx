import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { UserModel } from '../types/model/User';
import { AuthContextProps } from '../types/props/AuthContextProps';
import { userLogin } from '../services/Auth';
import { ACCRESS_TOKEN } from '../constants/common';
import Axios from '../api';

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {
    return new Promise((resolve) => {
      resolve(null);
    });
  },
  logout: () => {
    return;
  },
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserModel | null>(null);

  const login = (email: string, password: string) => {
    return userLogin(email, password).then((response: any) => {
      const token = response._tokenResponse.idToken
      Axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
      localStorage.setItem(ACCRESS_TOKEN, token)
      setUser(token);
    })
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
