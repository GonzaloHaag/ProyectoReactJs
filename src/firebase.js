// Import the functions you need from the SDKs you need

//Traigo una funcion que me conecta la app de React con la plataforma de firebase
import { initializeApp } from "firebase/app"; //login
//Traigo una funcion que me conecta con el servicio de base de datos de firebase

import { getFirestore } from "firebase/firestore"; //cick en base de datos


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//Estas son mis llaves de acceso
const firebaseConfig = {
  apiKey: "AIzaSyDNlBYJFr74yvrdnS1DRgpnwg2ysJ5cA3E",
  authDomain: "reactjs-firebase-ca7c2.firebaseapp.com",
  projectId: "reactjs-firebase-ca7c2",
  storageBucket: "reactjs-firebase-ca7c2.appspot.com",
  messagingSenderId: "1034300973232",
  appId: "1:1034300973232:web:45f9364921f1a19ecc5b75"
};

// Initialize Firebase


//Esta es una variable que representa la plataforma
const app = initializeApp(firebaseConfig);
//Esta es una variable que representa la "pestaña Firestore Database o la base de datos"
// const db = getFireStore(app);
// console.log(app);

export const db = getFirestore(app); //La exporto porque voy a hacer consulta en otros lugares