import firebase from 'firebase/compat/app';
import {initializeFirestore} from 'firebase/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtxB2wrd-QHLeyZ8BOc_a2VUFxuhV8hWI",
    authDomain: "react-hooksandmern-fh.firebaseapp.com",
    projectId: "react-hooksandmern-fh",
    storageBucket: "react-hooksandmern-fh.appspot.com",
    messagingSenderId: "362135716309",
    appId: "1:362135716309:web:c4e460999aaa7bd196fd5c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const DB = firebase.firestore();
//   const DB = initializeFirestore(firebaseConfig, {useFetchStreams: false})
  const GOOGLE_AUTH_PROVIDER = new firebase.auth.GoogleAuthProvider();

  export {
      DB,
      GOOGLE_AUTH_PROVIDER,
      firebase
  }