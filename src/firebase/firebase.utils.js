import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0VzELKrOD2LfuwbR2Bgv-sJBXuIsEY7c",
    authDomain: "crwn-db-eb1f6.firebaseapp.com",
    databaseURL: "https://crwn-db-eb1f6.firebaseio.com",
    projectId: "crwn-db-eb1f6",
    storageBucket: "crwn-db-eb1f6.appspot.com",
    messagingSenderId: "262456257883",
    appId: "1:262456257883:web:97cad9e2f1a0bf2d73fe7e",
    measurementId: "G-WJMSH0E8HY"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;