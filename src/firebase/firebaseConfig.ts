import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
    apiKey: "AIzaSyBIBurTCH0al-VoEtdeAEFB7XXNMZUJkDI",
    authDomain: "twitter-clone-app-d3449.firebaseapp.com",
    projectId: "twitter-clone-app-d3449",
    storageBucket: "twitter-clone-app-d3449.appspot.com",
    messagingSenderId: "378890862360",
    appId: "1:378890862360:web:98f1eb7e964560991d286d",
    measurementId: "G-1J7W0Y9V5P"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);
export default storage;