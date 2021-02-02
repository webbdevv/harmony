import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsont95mDdIE8ML07hKiuTuJB55mfsCVs",
    authDomain: "harmony-7595a.firebaseapp.com",
    projectId: "harmony-7595a",
    storageBucket: "harmony-7595a.appspot.com",
    messagingSenderId: "526047194112",
    appId: "1:526047194112:web:607a15a63d88a83df4fce5",
    measurementId: "G-60B9H1B59P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;