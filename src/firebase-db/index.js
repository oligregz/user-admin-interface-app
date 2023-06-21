import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqyFHvo4_nq8dm4KJPXyuRxB2_tjbdDgs",
  authDomain: "uai-api.firebaseapp.com",
  projectId: "uai-api",
  storageBucket: "uai-api.appspot.com",
  messagingSenderId: "317170347359",
  appId: "1:317170347359:web:1776a0bf2d2a2e16ecdaea"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };