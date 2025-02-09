import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdaEOmzaaw3niewtFIiZgcgoHgGmPFz6U",
  authDomain: "shopmax-9c11a.firebaseapp.com",
  projectId: "shopmax-9c11a",
  storageBucket: "shopmax-9c11a.firebasestorage.app",
  messagingSenderId: "617556170697",
  appId: "1:617556170697:web:89d77c2ca0b65b82f9ba18",
  measurementId: "G-6Z4415D4ND",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
