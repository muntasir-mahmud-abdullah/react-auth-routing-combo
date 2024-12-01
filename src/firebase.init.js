// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjCM59XzO8fbiei9qAAK_bASWyy4i98uM",
  authDomain: "auth-moha-milon-2c497.firebaseapp.com",
  projectId: "auth-moha-milon-2c497",
  storageBucket: "auth-moha-milon-2c497.firebasestorage.app",
  messagingSenderId: "70454543272",
  appId: "1:70454543272:web:2344cd0d1234fa29af539d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);