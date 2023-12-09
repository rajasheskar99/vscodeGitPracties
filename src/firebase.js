import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

import {getAuth ,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCm0VibDqMVP1uE-_ysI2lKwToGh7cysD8",
  authDomain: "shopper-app-57eac.firebaseapp.com",
  projectId: "shopper-app-57eac",
  storageBucket: "shopper-app-57eac.appspot.com",
  messagingSenderId: "1007199076077",
  appId: "1:1007199076077:web:89a40807204a73666c96e4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//to connect to fire store
export const myDatabase=firebase.firestore()

// to connect authentication( google)
//getAuth()--> this method will helps our react application to connect with the authentication which is present in firebase
//GoogleAuthProvider is a class that will help our react application ro connnect with google authentication

export const auth=getAuth(app) //auth --> authentication system

export const provider=new GoogleAuthProvider() // --> provider -google authenicaton