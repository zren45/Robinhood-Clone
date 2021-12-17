import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAVEzD9xPXRxvBX1vwy4jYSIW2VP2IGR5Q",
  authDomain: "robinhood-12471.firebaseapp.com",
  projectId: "robinhood-12471",
  storageBucket: "robinhood-12471.appspot.com",
  messagingSenderId: "84780397502",
  appId: "1:84780397502:web:377cd8078bdd4a25ebbfef",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
