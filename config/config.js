import * as firebase from 'firebase';
import 'firebase/firestore';

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
export const auth = firebase.auth();
export const storage = firebase.storage();
export const settings = { timestampInSnapshots: true};
export const firestore = firebase.firestore();

// Set Data
//Creating Currencies
firestore.collection('currencies').doc('EURJPY')


// database.collection("currencies").doc("EURJPY").set({
//   name: "EURJPY",
//   leg: "1",
//   direction:"Long",
//   active:"8 hours",
//   trade:"T1",
//   entry:"123.45",
//   tp:"124.45", 
// })
// .then(function() {
//   console.log("Document successfully written!");
// })
// .catch(function(error) {
//   console.error("Error writing document: ", error);
// });


//Update Data
var currencyRef = firestore.collection("currencies");

//Delete Data
