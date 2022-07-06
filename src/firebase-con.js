// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
import{getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg0UWuSZJ6tjpnNlJTCW4dgtQwjVcekVE",
  authDomain: "blog-web-48620.firebaseapp.com",
  projectId: "blog-web-48620",
  storageBucket: "blog-web-48620.appspot.com",
  messagingSenderId: "167183650275",
  appId: "1:167183650275:web:d9cb495267f62e20abe4d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();