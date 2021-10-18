import React, { Fragment, useContext, useEffect, useState } from "react";
import CalenderHeader from "../components/CalenderHeader";
import EventModal from "../components/EventModal";
import Month from "../components/Month";
import Sidebar from "../components/Sidebar";
import GlobalContext from "../context/GlobalContext";
import Loading from "../components/Loading";
import { getEventsData } from "../database";
import { getMonth } from "../util";

function CalendarScreen() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {
    monthIndex,
    showEventModal,
    dispatchCalEvent,
    loadingEvents,
    setLoadingEvents,
  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getEventsData();
        dispatchCalEvent({ type: "fetch", payload: result });
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div>
      {loadingEvents ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
}

export default CalendarScreen;
