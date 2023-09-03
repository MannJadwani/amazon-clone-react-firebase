// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB_c9_8s5vvwL9GsLcjpxq8c9R_OeFqAvY",
    authDomain: "clone-e260c.firebaseapp.com",
    projectId: "clone-e260c",
    storageBucket: "clone-e260c.appspot.com",
    messagingSenderId: "640221461059",
    appId: "1:640221461059:web:309392f650af8a576332f6",
    measurementId: "G-PGL8DG599X"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)


  export {db,auth};