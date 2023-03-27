import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, Line, LineChart } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Homepage = () => {
  let month = 1;
  let year = 2023;

  const getData = () => {
    axios
      .get(`http://localhost:8000/get/transaction/${year}/${month}/`, {})
      .then(function (response) {
        console.log(response.data[0].total);
        setData(response.data[0].total);
      });
  };

  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-12">
      <div className="m-3 flex h-auto w-full justify-center gap-10 rounded-xl bg-white p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200">
        <div className="">
          <div className="flex w-auto items-center justify-between">
            <div>
              <p className=" font-bold text-gray-400">Available Balance</p>
              <p className=" text-2xl">{data}</p>
            </div>
          </div>
          <div className=" mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Details"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className=" ">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
