import { initializeApp } from "firebase/app"; // Turns on Firebase for my website.
import { getAuth } from "firebase/auth"; // This imports Firebase Authentication service.
import { getFirestore } from "firebase/firestore"; // This imports Firestore (database) service.

// Identity of Firebase project (roshfire).
const firebaseConfig = {
  apiKey: "AIzaSyAVheQ6LTf0dn_mGmqRUIJ-1CkzUXWUHEU",
  authDomain: "roshfire-3ead5.firebaseapp.com",
  projectId: "roshfire-3ead5",
  storageBucket: "roshfire-3ead5.firebasestorage.app",
  messagingSenderId: "830808604868",
  appId: "1:830808604868:web:cd9c1eef818c31cbb90991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Here app represents the working copy of our project
 // We gave the initializeApp() the blueprint of our project and it returned the working copy
 // of our project stored in the "app".

export const auth = getAuth(app); // Here auth represents the Authentication part of the "app" handling login/signup
export const db = getFirestore(app); // // Here db represents the firestore database part of the "app" handling data