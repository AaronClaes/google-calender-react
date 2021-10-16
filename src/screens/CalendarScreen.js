import React, { Fragment, useContext, useEffect, useState } from "react";
import CalenderHeader from "../components/CalenderHeader";
import EventModal from "../components/EventModal";
import Month from "../components/Month";
import Sidebar from "../components/Sidebar";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../util";

function CalendarScreen() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <div>
      <Fragment>
        {showEventModal && <EventModal />}
        <div className="h-screen flex flex-col">
          <CalenderHeader />
          <div className="flex flex-1">
            <Sidebar />
            <Month month={currentMonth} />
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default CalendarScreen;
