import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyCyE_cLMh94VjyF3OfXr5BWk87buKKmkoc",
    authDomain: "inova-farm-83336.firebaseapp.com",
    projectId: "inova-farm-83336",
    storageBucket: "inova-farm-83336.appspot.com",
    messagingSenderId: "1060669761075",
    appId: "1:1060669761075:web:6898aaee5d508f5e2ea546",
    measurementId: "G-Q0GCMMBNMW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;