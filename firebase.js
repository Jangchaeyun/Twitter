// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDhAEzfZHnnvYHhGN55M74KKYae-69pmKI",
    authDomain: "twitter-e7fe1.firebaseapp.com",
    projectId: "twitter-e7fe1",
    storageBucket: "twitter-e7fe1.appspot.com",
    messagingSenderId: "227784335351",
    appId: "1:227784335351:web:4f76cde1da2c01885fd8f2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };