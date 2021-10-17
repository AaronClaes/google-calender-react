import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const history = useHistory();
  const { signin, signout, user } = useContext(AuthContext);
  return (
    <div className="flex flex-wrap overflow-hidden ">
      <section className="relative mx-auto">
        <nav className="flex justify-between w-screen border-b">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <div className="text-3xl font-bold font-heading flex items-center">
              <img src={logo} alt="calender logo" className="mr-2 w-12 h-12" />
              <h1 className="hidden sm:block mr-10 text-xl text-gray-500 font-bold cursor-pointer">
                Calender
              </h1>
            </div>
            <ul className="flex px-4 ml-auto font-semibold font-heading space-x-12 cursor-pointer">
              {user && (
                <li>
                  <p
                    className="text-gray-500 font-bold"
                    onClick={() => history.push("/calendar")}
                  >
                    Calendar
                  </p>
                </li>
              )}
              <li>
                {user ? (
                  <p
                    className="text-gray-500 font-bold"
                    target="_blank"
                    onClick={() => signout(() => history.push("/"))}
                  >
                    Sign out
                  </p>
                ) : (
                  <p
                    className="text-gray-500 font-bold"
                    target="_blank"
                    onClick={() => signin(() => history.push("/calendar"))}
                  >
                    Sign in
                  </p>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
