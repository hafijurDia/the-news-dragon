// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRxC_yXXoK68pkh5oyk5VqPXDgsG7AQx4",
  authDomain: "news-dragon-new.firebaseapp.com",
  projectId: "news-dragon-new",
  storageBucket: "news-dragon-new.appspot.com",
  messagingSenderId: "254941324451",
  appId: "1:254941324451:web:155159205b0f9d856acb16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;