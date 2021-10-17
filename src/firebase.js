import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbgV0hP2oVAsDIpLzekQ7EkuKlzlWIjmM",
  authDomain: "calendar-react-f90a8.firebaseapp.com",
  projectId: "calendar-react-f90a8",
  storageBucket: "calendar-react-f90a8.appspot.com",
  messagingSenderId: "466988280036",
  appId: "1:466988280036:web:8996ee26d5c565ed5ae4f1",
  databaseURL:
    "https://calendar-react-f90a8-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

export { provider, auth, GoogleAuthProvider };
export default database;
