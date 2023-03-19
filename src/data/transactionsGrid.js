import React from "react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import { AiFillHome, AiTwotoneSetting } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";

export const transactionsGrid = [
  {
    field: "transaction_id",
    headerText: "ID",
    width: "50",
    textAlign: "Center",
  },
  {
    field: "title",
    headerText: "Title",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "date",
    headerText: "Date",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "description",
    headerText: "Description",
    width: "150",
    textAlign: "Center",
  },
  {
    headerText: "Type",
    field: "type",
    textAlign: "Center",
    width: "120",
  },
  {
    field: "category",
    headerText: "Category",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "sub_category",
    headerText: "Sub Category",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "amount",
    headerText: "Amount",
    format: "C2",
    textAlign: "Center",
    editType: "numericedit",
    width: "100",
  },
];
