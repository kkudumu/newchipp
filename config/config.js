import firebase from 'firebase';

//API details
const config = {
    apiKey: "AIzaSyD0SALhG4InjOGdj5xdTLrFN_fuMfhzZr0",
    authDomain: "chipp-431c8.firebaseapp.com",
    databaseURL: "https://chipp-431c8.firebaseio.com",
    projectId: "chipp-431c8",
    storageBucket: "chipp-431c8.appspot.com",
    messagingSenderId: "339835710333"
  };

firebase.initializeApp(config)

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

