import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyCOdpIO8VePsFXKpwUYxHG9HXSpOmC2sTg",
   authDomain: "disney-44c85.firebaseapp.com",
   projectId: "disney-44c85",
   storageBucket: "disney-44c85.appspot.com",
   messagingSenderId: "1006736658067",
   appId: "1:1006736658067:web:232337acfeadbf129b8766",
   measurementId: "G-HTM0M75XP5"
};

// // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage};

export default db;
