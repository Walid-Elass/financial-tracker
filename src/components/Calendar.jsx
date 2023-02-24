import React from "react";
import { format, getMonth, startOfToday } from "date-fns";
import { useState } from "react";

const Calendar = () => {
  const years = [2022, 2023];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let today = startOfToday();
  let current_month = getMonth(today);

  const [month, setMonth] = useState(current_month);
  const [year, setYear] = useState("2023");

  return (
    <div>
      <div className=" text-white text-[12px] font-semibold text-center">
        YEAR
      </div>
      <div className=" grid px-8 my-2">
        {years.map((m, index) => (
          <button
            key={index}
            className=" calendar-button year-button px-1"
            onClick={(event) => {
              setYear(m);
              document
                .querySelectorAll(".year-button")
                .forEach((item) =>
                  item.classList.remove("calendar-button-selected")
                );
              event.currentTarget.classList.add("calendar-button-selected");
            }}
          >
            {m}
          </button>
        ))}
      </div>
      <div className=" text-white text-[12px] font-semibold text-center mt-10">
        MONTH
      </div>
      <div className="grid grid-cols-3 grid-rows-4 px-8 my-2">
        {months.map((m, index) => (
          <button
            key={index}
            className=" calendar-button month-button"
            onClick={(event) => {
              setMonth(m);
              document
                .querySelectorAll(".month-button")
                .forEach((item) =>
                  item.classList.remove("calendar-button-selected")
                );
              event.currentTarget.classList.add("calendar-button-selected");
            }}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
