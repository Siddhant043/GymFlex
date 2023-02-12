// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGtSTlJt2aBQRGobWM2TbmH2-Xq8t0LXI",
  authDomain: "fitflex-5b8c9.firebaseapp.com",
  databaseURL: "https://fitflex-5b8c9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fitflex-5b8c9",
  storageBucket: "fitflex-5b8c9.appspot.com",
  messagingSenderId: "131219410898",
  appId: "1:131219410898:web:98c4c829147761b5e8c20b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)