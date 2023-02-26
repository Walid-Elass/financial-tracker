import React from "react";
import Mastercard from "../assets/mastercard.png";

const Card = () => {
  return (
    <div className=" card w-[9.69cm] h-[5.56cm] p-10 ">
      <div className=" flex-col content-between">
        <div>
          <text className=" text-[#adb4c2] font-semibold text-[12px] ">
            Available Balance
          </text>
          <div className="grid grid-cols-2 w-12 text-white text-[24px] ml-4">
            <text>$</text>
            <text className=" tabular-nums">-1,120</text>
          </div>
        </div>

        <div className=" flex justify-between pt-12">
          <span className="text-[#adb4c2] font-medium text-[10px] h-[1cm] float-right">
            **** Just Do It
          </span>
          <div>
            <img
              src={Mastercard}
              alt="Missing"
              className=" h-[1cm] w-auto float-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
