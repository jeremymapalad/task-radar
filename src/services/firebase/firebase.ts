// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBie7YeMM4bzxmBuwLxH1RRIE_zqqvYeQs",
  authDomain: "task-management-system-3c798.firebaseapp.com",
  projectId: "task-management-system-3c798",
  storageBucket: "task-management-system-3c798.appspot.com",
  messagingSenderId: "920511402642",
  appId: "1:920511402642:web:3a0c1dd7c619e99fdc4c4b",
  measurementId: "G-K4CDT4WK46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
