import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDN6DiEtxxx-PT80woKJnwxSUIEVB-b4_k",
  authDomain: "realtor-app-87da0.firebaseapp.com",
  projectId: "realtor-app-87da0",
  storageBucket: "realtor-app-87da0.appspot.com",
  messagingSenderId: "108041042575",
  appId: "1:108041042575:web:3bf9f0d6ece97c85ac8efa",
  measurementId: "G-NYGGN96LTC"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
