import React from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";


const Dashbaord = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Card />
    </div>
  );
};

export default Dashbaord;
