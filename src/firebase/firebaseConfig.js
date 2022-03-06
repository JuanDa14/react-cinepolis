import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0XzIPb0TyyTQftNTwkiLiqnWlQA6uH-o",
  authDomain: "react-cinepolis.firebaseapp.com",
  projectId: "react-cinepolis",
  storageBucket: "react-cinepolis.appspot.com",
  messagingSenderId: "412441527502",
  appId: "1:412441527502:web:d2493dfb0ff608412efc9f",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
