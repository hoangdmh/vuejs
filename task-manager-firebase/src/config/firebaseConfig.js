// Firebase App (the core Firebase SDK) is always required and must be listed first
//import * as firebase from "firebase/app";
import firebase from 'firebase';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
//import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxKyBWwzjyCMKXzTXvcbTTuwNaLn8BT4",
  authDomain: "vuejs-f73cc.firebaseapp.com",
  databaseURL: "https://vuejs-f73cc.firebaseio.com",
  projectId: "vuejs-f73cc",
  storageBucket: "vuejs-f73cc.appspot.com",
  messagingSenderId: "792197834755",
  appId: "1:792197834755:web:fb03fd4d6aa477beec0636",
  measurementId: "G-CEDE13RQ8C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

firebase.database().ref('tasks/').set({
  username: 'name',
  email: 'email',
  profile_picture: 'imageUrl'
});

export default database;
