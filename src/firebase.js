import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import auth from 'firebase/auth';
import store from './store/index';

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({});

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("isLogedIn", { email: user.email, uid: user.uid });
  } else {
    store.dispatch("isLogedIn", null);
  }
});

export default firebaseApp.firestore();
