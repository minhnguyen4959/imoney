// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB7wvsdImZ85FnrLkKjE4fKmBfkeivhmM",
  authDomain: "imoney-9c4ad.firebaseapp.com",
  projectId: "imoney-9c4ad",
  storageBucket: "imoney-9c4ad.appspot.com",
  messagingSenderId: "213541709598",
  appId: "1:213541709598:web:13b23cbfed74238f494b0f",
  measurementId: "G-QN92RNG9LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);

export { projectAuth, projectFirestore, projectStorage };
