import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyApwrADdLSzVBfmhnAmd7Hy42hRdrwZEpU",
    authDomain: "unreal-learner.firebaseapp.com",
    projectId: "unreal-learner",
    storageBucket: "unreal-learner.appspot.com",
    messagingSenderId: "272794864761",
    appId: "1:272794864761:web:580cdd33ef7a10ec3758a8"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);