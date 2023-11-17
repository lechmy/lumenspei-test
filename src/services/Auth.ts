import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const userLogin = (email: string, password: string): Promise<any> => {
  return signInWithEmailAndPassword(auth, email, password)
}
