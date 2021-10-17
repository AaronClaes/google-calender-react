import React, { useContext } from "react";
import { ref, set } from "firebase/database";
import AuthContext from "../context/AuthContext";
import database from "../firebase";

function TestDatabaseScreen() {
  const { user } = useContext(AuthContext);

  function writeUserData(userId, title, date, description, label) {
    console.log(userId, title, date, description, label);
    set(ref(database, "events/" + userId), {
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
            "test title",
            1634502708084,
            "test description",
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
