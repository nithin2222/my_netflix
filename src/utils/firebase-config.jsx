
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
 
  apiKey: "AIzaSyCkL4auTyX6Ba-rHwjAa--q-TVZP_yGRPw",
  authDomain: "netflix-app-47c2c.firebaseapp.com",
  projectId: "netflix-app-47c2c",
  storageBucket: "netflix-app-47c2c.appspot.com",
  messagingSenderId: "291349290794",
  appId: "1:291349290794:web:13de8e227a984e9620c853",
  measurementId: "G-87WDC4YFRS"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)