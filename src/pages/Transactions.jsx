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
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { Button, DataGrid, Header, Modal, UploadFile } from "../components";
import { transactionsGrid } from "../data/transactionsGrid";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTransactions } from "../api/Transactions/GET/getTransactions";
import { useState } from "react";

const Transactions = () => {
    const tableHeader = [
        "Title",
        "Description",
        "Date",
        "Type",
        "Category",
        "Subcategory",
        "Amount",
    ];
    const fieldsMapping = [
        "title",
        "description",
        "created_at",
        "type",
        "category",
        "subcategory",
        "amount",
    ];

    let dialogInstance;
    let animationSettings;

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
        pageSize: 8,
        pageSizes: true,
    };

    console.log(transactions)

    const [visibility, setDialogVisibility] = useState(false);
    function dialogClose() {
        setDialogVisibility(false);
    }
    function handleClick() {
        setDialogVisibility(true);
    }

    animationSettings = { effect: "FadeZoom", duration: 300 };

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
                        actionFunc={handleClick}
                    ></Button>
                    <Modal
                        header="Import Transactions"
                        visible={visibility}
                        content={<UploadFile dialogClose={dialogClose} />}
                    />
                </div>
                {transactions && (
                    <DataGrid
                        tableHeader={tableHeader}
                        tableFields={fieldsMapping}
                        data={transactions.data}
                    />
                )}
            </div>
        </div>
    );
};

export default Transactions;
