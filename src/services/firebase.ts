import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpbZqcx-R_YcZyqjn5Kpbak10pizhUoZo",
  authDomain: "auth-test-8a4f5.firebaseapp.com",
  projectId: "auth-test-8a4f5",
  storageBucket: "auth-test-8a4f5.appspot.com",
  messagingSenderId: "812850796294",
  appId: "1:812850796294:web:d4f64d2edcd809b800f087"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)