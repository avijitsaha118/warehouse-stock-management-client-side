// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzs-XJoiDiCeSf0eMRV-Y6ta4bG-Cva6s",
  authDomain: "warehouse-management-web-593c9.firebaseapp.com",
  projectId: "warehouse-management-web-593c9",
  storageBucket: "warehouse-management-web-593c9.appspot.com",
  messagingSenderId: "746133084460",
  appId: "1:746133084460:web:4e203c871f7ff7b30d7489",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
