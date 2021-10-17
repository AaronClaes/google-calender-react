import React, { useContext } from "react";
import { ref, set } from "firebase/database";
import AuthContext from "../context/AuthContext";
import database from "../firebase";

function TestDatabaseScreen() {
  const { user } = useContext(AuthContext);

  function writeUserData(userId, title, date, description, label) {
    console.log(userId, title, date, description, label);
    set(ref(database, userId + "/events/" + title), {
      title,
      date,
      description,
      label,
    });
  }
  return (
    <div>
      <button
        onClick={() =>
          writeUserData(
            user.uid,
            "test title 2",
            1634502708284,
            "test description 2",
            "indigo"
          )
        }
        className="border rounded py-2 px-4 mr-5 m-2"
      >
        Add Item
      </button>
    </div>
  );
}

export default TestDatabaseScreen;
