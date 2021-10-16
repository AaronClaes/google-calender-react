import React, { Fragment, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label, checked }, index) => (
        <label key={index} className="items-center mt-3 block">
          {" "}
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${label}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{label}</span>
        </label>
      ))}
    </Fragment>
  );
}

export default Labels;
