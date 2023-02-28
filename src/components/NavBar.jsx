import React, { useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { History, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative rounded-full p-3 text-xl hover:bg-light-gray"
    >
      <span
        style={{ backgroundColor: dotColor }}
        className="absolute right-2 top-2 inline-flex h-2 w-2 rounded-full"
      />
        {icon}
    </button>
  </TooltipComponent>
);

const NavBar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return ()=> window.removeEventListener('resize', handleResize);
  },[])

  useEffect(() => {
    if(screenSize<=900){
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  },[screenSize])

  return (
    <div className="relative flex justify-between p-2 md:mx-6">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<MdOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="History"
          customFunc={() => handleClick("history")}
          color="blue"
          icon={<BiHistory />}
        />
        <NavButton
          title="Notifications"
          dotColor="#F84f31"
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className=" flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray"
            onClick={() => handleClick("userProfile")}
          >
            <img className="h-8 w-8 rounded-full object-cover" src={avatar} />
            <p>
              <span className="text-14 text-gray-400">Hi, </span>
              {""}
              <span className=" ml-1 text-14 font-bold text-gray-400">
                Walid
              </span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>

        {isClicked.history && <History />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
