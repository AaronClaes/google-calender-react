import React from "react";
import CreateEventButton from "./CreateEventButton";
import Labels from "./Labels";
import SmallCalendar from "./SmallCalendar";

function Sidebar() {
  return (
    <div className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </div>
  );
}

export default Sidebar;
