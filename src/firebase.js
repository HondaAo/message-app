import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJzcL1uu2dS56jMjzTTMJ_LLtVXNbgW6U",
    authDomain: "digital-maker-270904.firebaseapp.com",
    databaseURL: "https://digital-maker-270904.firebaseio.com",
    projectId: "digital-maker-270904",
    storageBucket: "digital-maker-270904.appspot.com",
    messagingSenderId: "374217457218",
    appId: "1:374217457218:web:b43eba7f7d2140b0a1f7db",
    measurementId: "G-91Q5L32STW"
})

const db = firebaseApp.firestore();

export default db;