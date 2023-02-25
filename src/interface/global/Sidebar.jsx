import React from "react";
import Calendar from "../../components/Calendar";

const Sidebar = () => {
  return (
    <div className="card h-screen w-[5.82cm] mx-8 pt-10">
      <div className=" text-center text-base font-bold text-white tracking-wide">
        DASHBOARD
      </div>
      <div className="mt-12">
        <Calendar />
      </div>
    </div>
  );
};

export default Sidebar;
