import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbeov2-HXoVVNOI_V5ojZa9FFTIj1XB8c",
  authDomain: "chair-finding-app.firebaseapp.com",
  projectId: "chair-finding-app",
  storageBucket: "chair-finding-app.appspot.com",
  messagingSenderId: "409624826295",
  appId: "1:409624826295:web:92a39f96a4f8d3b759d832",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
