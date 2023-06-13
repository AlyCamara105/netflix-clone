// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHcbM6JjS_NYSYdo8XCugtYst5aEn3xJU",
  authDomain: "netflix-clone-84937.firebaseapp.com",
  projectId: "netflix-clone-84937",
  storageBucket: "netflix-clone-84937.appspot.com",
  messagingSenderId: "1054898105909",
  appId: "1:1054898105909:web:216331ca97fb2eac274b7c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }