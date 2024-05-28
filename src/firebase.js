// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmuGGC3LpKGq_Yu3S6FAAEIiMzZkYd_wc",
  authDomain: "sgboda-422621.firebaseapp.com",
  projectId: "sgboda-422621",
  storageBucket: "sgboda-422621.appspot.com",
  messagingSenderId: "499388793496",
  appId: "1:499388793496:web:04ca477e24135d144786ed",
  measurementId: "G-FK6D91J49K"
};

// Initialize Firebase
// ... (tu configuración firebaseConfig)
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app); // Esta variable será global



