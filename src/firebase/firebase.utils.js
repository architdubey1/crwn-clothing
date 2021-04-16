import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfvjiTIOHbEJh6qs-X1hVaD91YZAwu_lg",
    authDomain: "crwn-clothing-ea813.firebaseapp.com",
    projectId: "crwn-clothing-ea813",
    storageBucket: "crwn-clothing-ea813.appspot.com",
    messagingSenderId: "885714098344",
    appId: "1:885714098344:web:225583d6e4a23a4d4d0a9d",
    measurementId: "G-ERSR7T0ZXK"
  };

  export const createUserProfileDocument = async(userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
