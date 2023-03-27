import React, { useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import axios from "axios";

const LineChart = () => {
  const getData = () => {
    axios
      .get("http://localhost:8000/get/transaction/chart/2022/Income/", {})
      .then(function (response) {
        let incomeList = [];
        response.data.forEach((i) => {
          let data_temp = {
            "Total Amount": i["Total Amount"],
            Month: i._id["Month"],
          };
          incomeList.push(data_temp);
        });
        setIncome(incomeList);
      });
    axios
      .get("http://localhost:8000/get/transaction/chart/2022/Expense/", {})
      .then(function (response) {
        let expenseList = [];
        response.data.forEach((i) => {
          let data_temp = {
            "Total Amount": i["Total Amount"],
            Month: i._id["Month"],
          };
          expenseList.push(data_temp);
        });
        setExpense(expenseList);
      });
  };

  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();

  useEffect(() => {
    getData();
  }, []);

  const data = [income, expense];

  console.log(data);
  const dataStructure = [
    {
      dataSource: data[0],
      xName: "Month",
      yName: "Total Amount",
      name: "Income",
      width: "2",
      marker: { visible: true, width: 10, height: 10 },
      type: "Line",
    },
    {
      dataSource: data[1],
      xName: "Month",
      yName: "Total Amount",
      name: "Expense",
      width: "2",
      marker: { visible: true, width: 10, height: 10 },
      type: "Line",
    },
  ];

  return (
    <ChartComponent className=" w-auto">
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {dataStructure.map((transaction, index) => (
          <SeriesDirective key={index} {...transaction} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
