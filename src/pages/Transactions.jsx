import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import {transactionsGrid} from "../data/transactionsGrid"
import axios from "axios";

const Transactions = () => {
  
  const getData = () => {
    axios
      .get("http://localhost:8000/get/transaction/all", {})
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      });
  };
  
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="Page" title="Transactions" />
      <GridComponent
      id="gridComp"
      dataSource={data}
      >
        <ColumnsDirective>
        {transactionsGrid.map((transaction,index)=>(
          <ColumnDirective key={index} {...transaction}/>
        ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Transactions;
