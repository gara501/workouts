import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
  apiKey: process.env.VUE_FIREBASE_API,
  authDomain: "workouts-a9794.firebaseapp.com",
  databaseURL: "https://workouts-a9794.firebaseio.com",
  projectId: "workouts-a9794",
  storageBucket: "workouts-a9794.appspot.com",
  messagingSenderId: "494097959645"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({});

export default firebaseApp.firestore();
