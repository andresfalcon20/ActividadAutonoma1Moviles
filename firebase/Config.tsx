// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdznAorQA0o9WrkK3kVEATSJXpVGEfLNE",
  authDomain: "app-fire-e0f66.firebaseapp.com",
  projectId: "app-fire-e0f66",
  storageBucket: "app-fire-e0f66.firebasestorage.app",
  messagingSenderId: "798671209382",
  appId: "1:798671209382:web:12cb9adf8c15a5178b8567",
  measurementId: "G-38SDJG82YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
