import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxpGFeL9pEJUz_egslzkVfq3LhVEd9GGU",
  authDomain: "tango-ecommerce-30aa5.firebaseapp.com",
  projectId: "tango-ecommerce-30aa5",
  storageBucket: "tango-ecommerce-30aa5.appspot.com",
  messagingSenderId: "917974381193",
  appId: "1:917974381193:web:a6904d9c330ed37e95cc58",
  measurementId: "G-BTSTSTK2K1"
};

// Initialize Firebase
initializeApp(firebaseConfig);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
