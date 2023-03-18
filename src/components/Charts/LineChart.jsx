import React, { useEffect, useState } from "react";
import axios from "axios";

const LineChart = () => {
  const getData = () => {
    axios
      .get("http://localhost:8000/get/transaction/all", {})
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      });
  };

  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  return <div>LineChart</div>;
};

export default LineChart;
