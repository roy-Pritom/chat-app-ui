// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIyU1bev3mVya0GEDHEk1WGEABySiijlE",
  authDomain: "chat-app-ui-6da31.firebaseapp.com",
  projectId: "chat-app-ui-6da31",
  storageBucket: "chat-app-ui-6da31.appspot.com",
  messagingSenderId: "622566056719",
  appId: "1:622566056719:web:1cab4c10ecbec549c5d47a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;