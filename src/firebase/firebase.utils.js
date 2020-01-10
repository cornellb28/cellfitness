import firebase from 'firebase/app'; // Gives access to database and auth
import 'firebase/firestore'; // database
import 'firebase/auth'; // authenication


const config = {
    apiKey: "AIzaSyDngH9MmB3QEq2D093uNhNzByR6mR0AOTk",
    authDomain: "cellfit-db.firebaseapp.com",
    databaseURL: "https://cellfit-db.firebaseio.com",
    projectId: "cellfit-db",
    storageBucket: "cellfit-db.appspot.com",
    messagingSenderId: "34234468464",
    appId: "1:34234468464:web:35ed83c38918c0b7caccb5"
  };

  // Making a API request. Async action
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // I didn't get anything back return nothing. Exits from the function
    if(!userAuth) return;

    // It does exist
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    // Return all the user information I requested
    return userRef;
  };

  

  firebase.initializeApp(config);

  export const auth = firebase.auth(); // From the import
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;