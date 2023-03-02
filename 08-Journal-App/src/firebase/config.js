// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA-9BqQypYdAULlOXL8aBo6ghUyUM2-Xw",
  authDomain: "journalapp-8cdd2.firebaseapp.com",
  projectId: "journalapp-8cdd2",
  storageBucket: "journalapp-8cdd2.appspot.com",
  messagingSenderId: "973157861376",
  appId: "1:973157861376:web:cc7189a7e1c77d5e87b0e5"
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const firestoreDB  = getFirestore(firebaseApp)
