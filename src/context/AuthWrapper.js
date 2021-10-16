import AuthContext from "./AuthContext";
import { auth } from "../firebase";
import { signin, signout } from "../auth";
import { useEffect, useState } from "react";

function AuthWrapper({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth);
        setLoadingAuth(false);
      } else {
        setUser(null);
        setLoadingAuth(false);
      }
    });
    return unsubscribe;
  });

  return (
    <AuthContext.Provider
      value={{ user, setUser, signin, signout, loadingAuth, setLoadingAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthWrapper;
