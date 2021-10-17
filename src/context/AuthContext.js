import { createContext } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  signin: () => {},
  signout: () => {},
  loadingAuth: true,
  setLoadingAuth: () => {},
});

export default AuthContext;
