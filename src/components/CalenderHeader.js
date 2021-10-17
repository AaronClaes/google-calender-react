import dayjs from "dayjs";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import logo from "../assets/logo.png";
import AuthContext from "../context/AuthContext";
import GlobalContext from "../context/GlobalContext";

function CalenderHeader() {
  const history = useHistory();
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const { signout } = useContext(AuthContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calender logo" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calender</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <ul className="flex px-4 ml-auto font-semibold font-heading space-x-12">
        <li>
          <p
            className="text-gray-500 font-bold cursor-pointer"
            onClick={() => history.push("/")}
          >
            Home
          </p>
        </li>
        <li>
          <p
            className="text-gray-500 font-bold cursor-pointer"
            target="_blank"
            onClick={() => signout(() => history.push("/"))}
          >
            Sign out
          </p>
        </li>
      </ul>
    </header>
  );
}

export default CalenderHeader;
