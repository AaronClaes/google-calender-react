import React from "react";
import { useHistory } from "react-router";

function DesktopOnly() {
  const history = useHistory();
  return (
    <div className="pt-60 m-5">
      <h1 className="text-4xl text-gray-700 font-bold text-center">
        Google Calendar Clone
      </h1>
      <p className="text-xl text-gray-700 pt-4 text-center">
        This app is currently only usable on desktop.
      </p>
      <div className="w-100 flex justify-center">
        <button
          onClick={() =>
            (window.location.href = "https://github.com/AaronClaes")
          }
          className="border rounded py-2 px-6 mr-5 mt-5 bg-blue-500 text-white hover:bg-blue-600"
        >
          My Github
        </button>
      </div>
    </div>
  );
}

export default DesktopOnly;
