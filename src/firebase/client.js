import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyDZQt5eQ53Bp3AbU_Ez3v7xmhuhfWCTT0o",
    authDomain: "proyectoreact-d5939.firebaseapp.com",
    projectId: "proyectoreact-d5939",
    storageBucket: "proyectoreact-d5939.appspot.com",
    messagingSenderId: "492024123275",
    appId: "1:492024123275:web:e8591bc162186e3ee7698e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);