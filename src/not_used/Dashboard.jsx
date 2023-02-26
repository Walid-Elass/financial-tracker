import React from "react";
import Card from "../../components/Card";
import Sidebar from "../global/Sidebar";


const Dashbaord = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Card />
    </div>
  );
};

export default Dashbaord;
