import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, Line, LineChart } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Homepage = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="m-3 grid h-44 w-full grid-flow-col rounded-xl bg-white bg-hero-pattern bg-cover bg-center bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <p className=" font-bold text-gray-400">Available Balance</p>
                <p className=" text-2xl">90,000 $</p>
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
              <LineChart/>
            </div>
          </div>
          <div className="h-33 bg-black">Yearly Chart</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
