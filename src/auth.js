import { useContext } from "react";
import {
  signInWithPopup,
  signOut,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import { provider, auth } from "./firebase";
import AuthContext from "./context/AuthContext";

function useAuth() {
  const authContext = useContext(AuthContext);
  return useContext(authContext);
}

export const signin = async (cb) => {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithPopup(auth, provider)
        .then((result) => {
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // const user = result.user;
          cb();
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // const email = error.email;
          // const credential = GoogleAuthProvider.credentialFromError(error);
        });
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });
};

export const signout = async (cb) => {
  return signOut(auth)
    .then(() => {
      cb();
    })
    .catch((error) => {});
};

export { useAuth };
