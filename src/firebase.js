import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBcaNt_pZZFUb4EEv6NvjajkVZlJ2WwXSU",
  authDomain: "pruebajic.firebaseapp.com",
  databaseURL: "https://pruebajic-default-rtdb.firebaseio.com",
  projectId: "pruebajic",
  storageBucket: "pruebajic.appspot.com",
  messagingSenderId: "605606357007",
  appId: "1:605606357007:web:9df70a2543fcd680dbdb7a"
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();