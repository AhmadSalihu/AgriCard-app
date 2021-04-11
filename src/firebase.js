import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAuSyJZ6kTtzVxIpbN0Zbrd5AKPVJ5pXjw",
    authDomain: "agricard-3825c.firebaseapp.com",
    projectId: "agricard-3825c",
    storageBucket: "agricard-3825c.appspot.com",
    messagingSenderId: "1031875544977",
    appId: "1:1031875544977:web:14162ea6ed07a6c8777c30"
};
  
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;