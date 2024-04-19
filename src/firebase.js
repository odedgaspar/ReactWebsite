import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApwrADdLSzVBfmhnAmd7Hy42hRdrwZEpU",
    authDomain: "unreal-learner.firebaseapp.com",
    projectId: "unreal-learner",
    storageBucket: "unreal-learner.appspot.com",
    messagingSenderId: "272794864761",
    appId: "1:272794864761:web:580cdd33ef7a10ec3758a8"

};


firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };