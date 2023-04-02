import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
    Footer,
    Sidebar,
    Navbar,
  } from "../../components";

const PrivateLayout = (props) => {
  const {children} = props
  const { activeMenu } = useStateContext();

  return (
    <div className=" relative flex dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="rounded-full p-3 text-3xl text-white hover:drop-shadow-xl"
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className=" sidebar fixed w-72 bg-white dark:bg-secondary-dark-bg ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-main-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={`min-h-screen w-full bg-main-bg dark:bg-main-bg ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      >
        <div className=" navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static">
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
