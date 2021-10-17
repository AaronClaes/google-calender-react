import React, { useContext } from "react";
import { Fragment } from "react";
import { useHistory } from "react-router";
import Navbar from "../components/Navbar";
import AuthContext from "../context/AuthContext";

function HomeScreen() {
  const history = useHistory();
  const { signin, user } = useContext(AuthContext);
  return (
    <Fragment>
      <Navbar />
      <div className="container mx-auto pt-60">
        <h1 className="text-4xl text-gray-700 font-bold">
          Google Calendar Clone
        </h1>
        <p className="text-xl text-gray-700 pt-4">
          I made this google calendar clone to practice React, Firebase and
          Taiwind CSS!
        </p>
        <p className="text-xl text-gray-700 font-bold">Enjoy!</p>
        {user ? (
          <button
            onClick={() => history.push("/calendar")}
            className="border rounded py-2 px-6 mr-5 mt-5 bg-blue-500 text-white hover:bg-blue-600"
          >
            Calendar
          </button>
        ) : (
          <button
            onClick={() => signin(() => history.push("/calendar"))}
            className="border rounded py-2 px-6 mr-5 mt-5 bg-blue-500 text-white hover:bg-blue-600"
          >
            Sign in
          </button>
        )}
      </div>
    </Fragment>
  );
}

export default HomeScreen;
