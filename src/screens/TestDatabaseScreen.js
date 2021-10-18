import React, { useContext } from "react";
import { ref, set, onValue } from "firebase/database";
import AuthContext from "../context/AuthContext";
import database from "../firebase";
import { getEventsData } from "../database";

function TestDatabaseScreen() {
  const { user } = useContext(AuthContext);

  function writeEventData(userId, title, description, date, label, id) {
    //console.log(userId, title, description, date, label, id);
    set(ref(database, userId + "/events/" + id), {
      title,
      date,
      description,
      label,
      id,
    });
  }
  const starCountRef = ref(database, user?.uid + "/events");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data, "YOLO");
  });

  return (
    <div>
      <button
        onClick={() =>
          writeEventData(
            user.uid,
            "test title 3",
            "test description 3",
            1634502708284,
            "indigo",
            1634502708361
          )
        }
        className="border rounded py-2 px-4 mr-2 m-2"
      >
        Add Item
      </button>
      <button
        onClick={() => getEventsData()}
        className="border rounded py-2 px-4 mr-5 m-2 ml-0"
      >
        Read items
      </button>
    </div>
  );
}

export default TestDatabaseScreen;
