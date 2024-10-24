// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUKKMEkf4SpmpLgEX6HIMudMaXXZBFLgo",
    authDomain: "solo-shpere-cf9e8.firebaseapp.com",
    projectId: "solo-shpere-cf9e8",
    storageBucket: "solo-shpere-cf9e8.appspot.com",
    messagingSenderId: "105289631215",
    appId: "1:105289631215:web:c5e9e89d80a223d3eda21a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
