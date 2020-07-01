// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import 'firebase/database';

import firebaseConfig from './firebaseConfig';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
//import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// database.ref('tasks/').set({
//   username: 'name edit',
//   email: 'email',
//   profile_picture: 'imageUrl'
// });

// var taskRef = database.ref('tasks');
// taskRef.on('value', function (snapshot) {
//   snapshot.forEach(function (childSnapshot) {
//     var childData = childSnapshot.val();
//     console.log(childData);
//   });
// })

export default database;
