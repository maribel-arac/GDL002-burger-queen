import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8C4Lu3hT4eEKHLzZbpM_og0TBy-iqNMs",
    authDomain: "burgerqueen-a9a26.firebaseapp.com",
    databaseURL: "https://burgerqueen-a9a26.firebaseio.com",
    projectId: "burgerqueen-a9a26",
    storageBucket: "burgerqueen-a9a26.appspot.com",
    messagingSenderId: "571621356302",
    appId: "1:571621356302:web:0d87a6481a4aef04"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;