import { UserModel } from '../model/User'

export interface AuthContextProps {
  user: UserModel | null
  login: (email: string, password: string) => Promise<any>
  logout: () => void
}
