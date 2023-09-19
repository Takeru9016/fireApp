import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOD57YICxTp-6G97tU-X_NX88BJuJuuVI",
  authDomain: "fireapp-7acbc.firebaseapp.com",
  projectId: "fireapp-7acbc",
  storageBucket: "fireapp-7acbc.appspot.com",
  messagingSenderId: "459845978254",
  appId: "1:459845978254:web:5dc06cbeac875062d121df",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
});
