
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "taskdata-eeb70.firebaseapp.com",
    projectId: "taskdata-eeb70",
    storageBucket: "taskdata-eeb70.appspot.com",
    messagingSenderId: "168497138378",
    appId: "1:168497138378:web:962eaf1f42b9206ebf0233",
    measurementId: "G-M3VEPZFBFW"
  };
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
