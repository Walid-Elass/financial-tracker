import React from "react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import {AiFillHome, AiTwotoneSetting} from "react-icons/ai";
import {FaUniversity} from "react-icons/fa";


export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Homepage",
        icon: <MdDashboard />,
      },
    ],
  },

  {
    title: "Transactions",
    links: [
      {
        name: "Transactions",
        icon: <GrTransaction />,
      },
      {
        name: "Add transaction",
        icon: <SiAddthis />,
      },
    ],
  },
  {
    title: "Profile",
    links: [
      {
        name: "Details",
        icon: <GrTransaction />,
      },
      {
        name: "profile",
        icon: <BsPersonCircle />,
      },
    ],
  },
  // {
  //   title: 'Apps',
  //   links: [
  //     {
  //       name: 'calendar',
  //       icon: <AiOutlineCalendar />,
  //     },
  //     {
  //       name: 'kanban',
  //       icon: <BsKanban />,
  //     },
  //     {
  //       name: 'editor',
  //       icon: <FiEdit />,
  //     },
  //     {
  //       name: 'color-picker',
  //       icon: <BiColorFill />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   links: [
  //     {
  //       name: 'line',
  //       icon: <AiOutlineStock />,
  //     },
  //     {
  //       name: 'area',
  //       icon: <AiOutlineAreaChart />,
  //     },

  //     {
  //       name: 'bar',
  //       icon: <AiOutlineBarChart />,
  //     },
  //     {
  //       name: 'pie',
  //       icon: <FiPieChart />,
  //     },
  //     {
  //       name: 'financial',
  //       icon: <RiStockLine />,
  //     },
  //     {
  //       name: 'color-mapping',
  //       icon: <BsBarChart />,
  //     },
  //     {
  //       name: 'pyramid',
  //       icon: <GiLouvrePyramid />,
  //     },
  //     {
  //       name: 'stacked',
  //       icon: <AiOutlineBarChart />,
  //     },
  //   ],
  // },
];
export const categories = [
  {
    icon: <AiFillHome />,
    amount: "39,354",
    percentage: "-4%",
    title: "Home",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsFillPersonFill />,
    amount: "4,396",
    percentage: "+23%",
    title: "Personal",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "#e3ab4b",
    pcColor: "green-600",
  },
  {
    icon: <FaUniversity />,
    amount: "423,39",
    percentage: "+38%",
    title: "University",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <AiTwotoneSetting />,
    amount: "39,354",
    percentage: "-12%",
    title: "Utilities",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <AiTwotoneSetting />,
    amount: "39,354",
    percentage: "-12%",
    title: "Medical",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <AiTwotoneSetting />,
    amount: "39,354",
    percentage: "-12%",
    title: "Transport",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <AiTwotoneSetting />,
    amount: "39,354",
    percentage: "-12%",
    title: "Savings",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <AiTwotoneSetting />,
    amount: "39,354",
    percentage: "-12%",
    title: "Investment",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <AiTwotoneSetting />,
    amount: "39,354",
    percentage: "-12%",
    title: "Other",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];


