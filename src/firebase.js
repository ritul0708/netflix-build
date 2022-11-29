// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2FI3U0uz5dP46gLPJsyQ_uKSBcOHc3oc",
  authDomain: "netflix-build-e0bd0.firebaseapp.com",
  projectId: "netflix-build-e0bd0",
  storageBucket: "netflix-build-e0bd0.appspot.com",
  messagingSenderId: "647451046050",
  appId: "1:647451046050:web:2832a50d46802c8d4067fb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;