import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDFRpkUafqmt7xx_MC0oLhED998beN0hB4",
  authDomain: "ls-digital-47.firebaseapp.com",
  projectId: "ls-digital-47",
  storageBucket: "ls-digital-47.appspot.com",
  messagingSenderId: "746059789984",
  appId: "1:746059789984:web:c1ff54e459f2d5137fbbc5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;