import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../context/AuthContext";

function SigninScreen() {
  const history = useHistory();
  const { signin, signout } = useContext(AuthContext);

  return (
    <div>
      <button
        onClick={() => signin(() => history.push("/calendar"))}
        className="p-2 border m-2"
      >
        SIGN IN
      </button>

      <button
        onClick={() => signout(() => history.push("/calendar"))}
        className="p-2 border m-2"
      >
        LOGOUT
      </button>
    </div>
  );
}

export default SigninScreen;
