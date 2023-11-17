import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFRpkUafqmt7xx_MC0oLhED998beN0hB4",
  authDomain: "ls-digital-47.firebaseapp.com",
  projectId: "ls-digital-47",
  storageBucket: "ls-digital-47.appspot.com",
  messagingSenderId: "746059789984",
  appId: "1:746059789984:web:c1ff54e459f2d5137fbbc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;