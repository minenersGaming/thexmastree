import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqDKYpN9X7fXLD54fSy1o-gbdHE2GO2Xk",
  authDomain: "xmas-app-8eb40.firebaseapp.com",
  projectId: "xmas-app-8eb40",
  storageBucket: "xmas-app-8eb40.firebasestorage.app",
  messagingSenderId: "238993862355",
  appId: "1:238993862355:web:93d138ccf011592c282e26",
  measurementId: "G-TRG7FCM4F9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();