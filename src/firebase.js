import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {

// };

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXox0Bp0ZkDRBAqCUlLRJrUQ8w4FYoxiA",
  authDomain: "todo-31337.firebaseapp.com",
  databaseURL: "https://todo-31337.firebaseio.com",
  projectId: "todo-31337",
  storageBucket: "todo-31337.appspot.com",
  messagingSenderId: "827478395878",
  appId: "1:827478395878:web:c1daaa92b8a8b284506427",
  measurementId: "G-796GHQ0B5Z",
});

const db = firebase.firestore();

export default db;
