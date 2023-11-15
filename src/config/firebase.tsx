// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_ldhgVLm5zPrs1zE-uTxOlR1Xi5Sc0Hs",
  authDomain: "buddymetter.firebaseapp.com",
  projectId: "buddymetter",
  storageBucket: "buddymetter.appspot.com",
  messagingSenderId: "183407923371",
  appId: "1:183407923371:web:6c207c0024a7cf3cbee7ee",
  measurementId: "G-GX7SF8QE2Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)