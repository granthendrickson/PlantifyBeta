// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIh7DUEk1IWjz3aW7PgLQjFhlZEW9jZIg",
  authDomain: "plantify-d36ed.firebaseapp.com",
  projectId: "plantify-d36ed",
  storageBucket: "plantify-d36ed.appspot.com",
  messagingSenderId: "804312353430",
  appId: "1:804312353430:web:5a4054446a35dcd3c1d0b7",
  measurementId: "G-GZ0TBCSS23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

