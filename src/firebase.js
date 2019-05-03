import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import auth from 'firebase/auth';
import store from './store';

const config = {
  apiKey: "AIzaSyDz0wf6YcSrextNV5TKmG7P68GoOqft7Qc",
  authDomain: "workouts-a9794.firebaseapp.com",
  databaseURL: "https://workouts-a9794.firebaseio.com",
  projectId: "workouts-a9794",
  storageBucket: "workouts-a9794.appspot.com",
  messagingSenderId: "494097959645"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({});

firebaseApp.auth().onAuthStateChanged(user => {
  console.log('USERRRRR', user);
  if (user) {
    store.dispatch("isLogedIn", { email: user.email, uid: user.uid });
  } else {
    store.dispatch("isLogedIn", null);
  }
});

export default firebaseApp.firestore();
