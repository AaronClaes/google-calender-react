import database, { auth } from "./firebase";
import { ref, set, child, get } from "firebase/database";

export async function writeEventData(event) {
  try {
    const userId = auth.currentUser.uid;
    await set(ref(database, userId + "/events/" + event.id), event);
  } catch (error) {
    console.log(error);
  }
}

export async function getEventData() {
  try {
    const userId = auth.currentUser.uid;
    console.log("get data");
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `${userId}/events`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}
