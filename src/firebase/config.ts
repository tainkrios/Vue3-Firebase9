import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlrM2p6EAzYbjKNVrsQ-Qw37RqLA9dB5s",
  authDomain: "fir-9-tutorials-653c8.firebaseapp.com",
  projectId: "fir-9-tutorials-653c8",
  storageBucket: "fir-9-tutorials-653c8.appspot.com",
  messagingSenderId: "29966146593",
  appId: "1:29966146593:web:76f0eca829cbc91020d760"
}

// init firebase
const app = initializeApp(firebaseConfig)

// init services
export const db = getFirestore(app)

export const auth = getAuth(app)