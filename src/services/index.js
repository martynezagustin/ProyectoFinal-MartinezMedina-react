// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjetZZ-SldHTq__9NbkPiFIFCKjyznX1M",
  authDomain: "my-ecommerce-b5d25.firebaseapp.com",
  projectId: "my-ecommerce-b5d25",
  storageBucket: "my-ecommerce-b5d25.appspot.com",
  messagingSenderId: "512420360454",
  appId: "1:512420360454:web:eeba3d60fd8d58f7616e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)