// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE7Be4DvsRtIK5lC4HiZ0j02FyLJolrNU",
    authDomain: "ecommerce-e73c3.firebaseapp.com",
    projectId: "ecommerce-e73c3",
    storageBucket: "ecommerce-e73c3.appspot.com",
    messagingSenderId: "313761604052",
    appId: "1:313761604052:web:2233f1f4666c627eea3641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;