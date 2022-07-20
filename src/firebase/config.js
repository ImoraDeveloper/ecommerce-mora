// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQOAyJS5FStFnaDVa_BHbBtY2t3no3kVE",
  authDomain: "mora-ecommerce.firebaseapp.com",
  projectId: "mora-ecommerce",
  storageBucket: "mora-ecommerce.appspot.com",
  messagingSenderId: "590602398857",
  appId: "1:590602398857:web:833ef1164fa4e3cb9f2a58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
