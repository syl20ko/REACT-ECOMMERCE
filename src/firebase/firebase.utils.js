import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCUkAV8IHvHO0C34C0ll3LANPtBed_U-uk",
    authDomain: "crown-49c61.firebaseapp.com",
    projectId: "crown-49c61",
    storageBucket: "crown-49c61.appspot.com",
    messagingSenderId: "403001949437",
    appId: "1:403001949437:web:03d707dd04fe47c89f5294",
    measurementId: "G-YERQXCMY5Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth()

  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;