import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
  
const firebaseConfig = {
    apiKey: "AIzaSyBYAxQDi20wuOx1Bq8_iRBJmNw9jv_8cuc",
    authDomain: "login-69fa6.firebaseapp.com",
    databaseURL: "https://login-69fa6.firebaseio.com",
    projectId: "login-69fa6",
    storageBucket: "login-69fa6.appspot.com",
    messagingSenderId: "980019763306",
    appId: "1:980019763306:web:c7fa56fd1a9388bd1d5213",
    measurementId: "G-M486PCBXNK"
};
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
  
export default db;
