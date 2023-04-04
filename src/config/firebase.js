import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDUFxkiAFRjkBaNpxt0W7YeboOPGTsylhc",
  authDomain: "tiktok---jornada-339df.firebaseapp.com",
  projectId: "tiktok---jornada-339df",
  storageBucket: "tiktok---jornada-339df.appspot.com",
  messagingSenderId: "197466537321",
  appId: "1:197466537321:web:8835e32771a9b786d951f8"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
