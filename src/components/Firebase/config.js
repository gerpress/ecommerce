import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8Ojk0YDMLAAlOADYBF7_QBFiQrEqMyxU",
  authDomain: "ecommerce-75052.firebaseapp.com",
  projectId: "ecommerce-75052",
  storageBucket: "ecommerce-75052.appspot.com",
  messagingSenderId: "512129361063",
  appId: "1:512129361063:web:6399a2d46b6155069b6782",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
