import firebase from 'firebase';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBjykH_nZPNI3Bb-aN8IEgN2WHN-DnfJx4",
    authDomain: "digitalas-412fd.firebaseapp.com",
    projectId: "digitalas-412fd",
    storageBucket: "digitalas-412fd.appspot.com",
    messagingSenderId: "1050488102347",
    appId: "1:1050488102347:web:758c6334052604bf78aa4e",
    measurementId: "G-Q8ENHTFTPW"
  };
  firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
export const firestore = firebase.firestore();

console.log(firebase);
//  export const signOut=firebase.signOut();
export default firebase;