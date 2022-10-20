import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDo_n1ogyh6ybzwQA3nPLDkLl-tGECZJsw",
    authDomain: "project-f9f4f.firebaseapp.com",
    projectId: "project-f9f4f",
    storageBucket: "project-f9f4f.appspot.com",
    messagingSenderId: "551092319977",
    appId: "1:551092319977:web:f4c9e41fc64f34bc50e278",
    measurementId: "G-CH0RP2LX5N"
  };




  
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
export {db,auth}