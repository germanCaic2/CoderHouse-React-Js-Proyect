import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGfFfdRPeUBPJvPkFEk1OOYiSz3HAS8So",
  authDomain: "coderhouse-reactjs-9e00a.firebaseapp.com",
  projectId: "coderhouse-reactjs-9e00a",
  storageBucket: "coderhouse-reactjs-9e00a.appspot.com",
  messagingSenderId: "787014411158",
  appId: "1:787014411158:web:ad77c3ca4ed599accc33b7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);