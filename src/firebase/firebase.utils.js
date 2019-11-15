import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDngH9MmB3QEq2D093uNhNzByR6mR0AOTk",
    authDomain: "cellfit-db.firebaseapp.com",
    databaseURL: "https://cellfit-db.firebaseio.com",
    projectId: "cellfit-db",
    storageBucket: "cellfit-db.appspot.com",
    messagingSenderId: "34234468464",
    appId: "1:34234468464:web:35ed83c38918c0b7caccb5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;