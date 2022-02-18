import { initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth , GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBlIR8nQTSU6pJC5ZCC9VZ2tzNMX-Mj1mg",
    authDomain: "insta-clone-new-umair.firebaseapp.com",
    projectId: "insta-clone-new-umair",
    storageBucket: "insta-clone-new-umair.appspot.com",
    messagingSenderId: "845242138477",
    appId: "1:845242138477:web:94b7ca24c2f8989b95e464",
    measurementId: "G-SQJT0EQ1D5"
  };


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider
