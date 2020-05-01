import * as firebase  from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBxUEbEjVHH15RBeCN9y-0JzlToo5vUWnQ",
    authDomain: "asamblea-bp.firebaseapp.com",
    databaseURL: "https://asamblea-bp.firebaseio.com",
    projectId: "asamblea-bp",
    storageBucket: "asamblea-bp.appspot.com",
    messagingSenderId: "1024472669145",
    appId: "1:1024472669145:web:724d135ee1735af56f97c8",
    measurementId: "G-V0KHHBJRC8"
  };

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase