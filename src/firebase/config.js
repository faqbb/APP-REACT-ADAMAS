// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXJ8gY1ZGHNjNmuOGG1rr3CrhdoqZRIRo",
  authDomain: "adamas-shop.firebaseapp.com",
  projectId: "adamas-shop",
  storageBucket: "adamas-shop.appspot.com",
  messagingSenderId: "562736276561",
  appId: "1:562736276561:web:63457d6d594994fbba0470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestoreApp(){return app}