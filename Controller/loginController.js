import firebase from 'firebase'; //'@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

export default function login(email, password, logincomplete) {
  // const user = { "email": email, "password": password }

  var firebaseConfig = {
    apiKey: "AIzaSyCtSoNW0QOpodMtYAyGCUbZDeQScGbwK9k",
    authDomain: "blooddonation-d9f42.firebaseapp.com",
    projectId: "blooddonation-d9f42",
    storageBucket: "blooddonation-d9f42.appspot.com",
    messagingSenderId: "859852375566",
    appId: "1:859852375566:web:447fc855b7fe92a2e51e5f",
    measurementId: "G-HKGTTRS9T9"
  };

  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(logincomplete)
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }

    console.error(error);
    });


  // firebase.initializeApp(firebaseConfig);
  // // console.log(firebase.auth());
  //   auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(logincomplete)
  //     .catch((error) => console.log("error:", error))
  // console.log("Email:", email)
  // console.log("Password:", password)

}

export function signUp(email, password, signUpComplete) {

  // console.log(email, password);

  var firebaseConfig = {
    apiKey: "AIzaSyCtSoNW0QOpodMtYAyGCUbZDeQScGbwK9k",
    authDomain: "blooddonation-d9f42.firebaseapp.com",
    projectId: "blooddonation-d9f42",
    storageBucket: "blooddonation-d9f42.appspot.com",
    messagingSenderId: "859852375566",
    appId: "1:859852375566:web:447fc855b7fe92a2e51e5f",
    measurementId: "G-HKGTTRS9T9"
  };

  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(signUpComplete)
    .catch((error) => console.log("error:", error))
  // console.log("Signup Email:", email)
  // console.log("Signup Passwor:", password)

}

