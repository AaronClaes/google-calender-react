import React, { Fragment, useState, useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMonth } from "./util";
import CalenderHeader from "./components/CalenderHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
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
  );
}

export default App;
