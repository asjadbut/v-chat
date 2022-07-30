import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB946WSPqcHzVc2xy3Xmmjn3mDJTykFxoA",
    authDomain: "chatapp-a3fda.firebaseapp.com",
    projectId: "chatapp-a3fda",
    storageBucket: "chatapp-a3fda.appspot.com",
    messagingSenderId: "546113294777",
    appId: "1:546113294777:web:dbdeef6751bcd31eaf6668",
    measurementId: "G-KFD4X2GCCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;


 