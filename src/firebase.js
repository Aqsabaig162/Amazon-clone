// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAvzXPpuPFGc_tbw7UGM4CdJe59yBeFTo",
  authDomain: "clone-cd08f.firebaseapp.com",
  projectId: "clone-cd08f",
  storageBucket: "clone-cd08f.appspot.com",
  messagingSenderId: "741617340001",
  appId: "1:741617340001:web:e4711e09f8bac74581a420",
  measurementId: "G-P8X2D2BDNT"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db,  auth} 
