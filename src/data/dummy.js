import React from "react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";

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
        name: "Details",
        icon: <GrTransaction/>,
      },
      {
        name: "Add transaction",
        icon: <SiAddthis/>,
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
