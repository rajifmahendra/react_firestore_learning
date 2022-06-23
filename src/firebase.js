// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCEj83n096QLh2catjZ_jjm-xpovl9pTk",
  authDomain: "learning-firestore-d987f.firebaseapp.com",
  projectId: "learning-firestore-d987f",
  storageBucket: "learning-firestore-d987f.appspot.com",
  messagingSenderId: "982685082485",
  appId: "1:982685082485:web:5c97a3e5cc9ad80023293c",
  measurementId: "G-8FC17QD598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);