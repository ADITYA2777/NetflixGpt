// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7YfUZkTdKvdyXSrGGgahxSuFG8KbSGWM",
  authDomain: "netflixgpt-8a11b.firebaseapp.com",
  projectId: "netflixgpt-8a11b",
  storageBucket: "netflixgpt-8a11b.appspot.com",
  messagingSenderId: "1020393139695",
  appId: "1:1020393139695:web:58602764c3d75a33999a1a",
  measurementId: "G-KDLQ37VE4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
