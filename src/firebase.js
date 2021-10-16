import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbgV0hP2oVAsDIpLzekQ7EkuKlzlWIjmM",
  authDomain: "calendar-react-f90a8.firebaseapp.com",
  projectId: "calendar-react-f90a8",
  storageBucket: "calendar-react-f90a8.appspot.com",
  messagingSenderId: "466988280036",
  appId: "1:466988280036:web:8996ee26d5c565ed5ae4f1",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
const db = getFirestore(app);

// export { provider, auth, GoogleAuthProvider };
export default db;
