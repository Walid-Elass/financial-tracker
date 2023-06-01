import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  Filter,
  Page,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Button, Header } from "../components";
import { transactionsGrid } from "../data/transactionsGrid";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTransactions } from "../api/GET/getTransactions";

const Transactions = () => {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => getTransactions(),
  });

  const pageOptions = {
    pageSize: 8, pageSizes: true
};

  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="Page" title="Transactions" />
      <div className="flex flex-col gap-3">
        <div className=" place-self-end">
          <Button
            bgColor="blue"
            text="Import"
            color="white"
            borderRadius="10px"
            size="lg"
          ></Button>
        </div>
        {transactions && (
          <GridComponent
            id="gridComp"
            dataSource={transactions.data}
            allowPaging
            allowSorting
            allowFiltering
            allowExcelExport
            pageSettings={pageOptions}
          >
            <ColumnsDirective>
              {transactionsGrid.map((transaction, index) => (
                <ColumnDirective key={index} {...transaction} />
              ))}
            </ColumnsDirective>
            <Inject services={[Resize, Sort, Filter, Page]} />
          </GridComponent>
        )}
      </div>
    </div>
  );
};

export default Transactions;
