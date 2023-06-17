import { useState } from "react";
import Button from "./Button";

const Modal= ({ header, content, visible }) => {
  return (
    <div
      className={`modal ${
        visible ? "fixed" : "hidden"
      } inset-0 flex items-center justify-center bg-black bg-opacity-50`}
    >
      <div className="rounded-lg lg:w-[700px] bg-white p-6">
        <h2 className="mb-4 text-lg font-bold">{header}</h2>
        {content}
      </div>
    </div>
  );
}

export default Modal
