// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrzAf5nj0fwdYOdzGOVn_WouIec6yb2IY",
  authDomain: "react-38e35.firebaseapp.com",
  projectId: "react-38e35",
  storageBucket: "react-38e35.appspot.com",
  messagingSenderId: "641910404653",
  appId: "1:641910404653:web:f6ab26ccc9e2c321202aa4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app };
