import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import { FileInput } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTransactions } from "../api/Transactions/POST/postTransactions";

function UploadFile({ dialogClose }) {
    // Access the client
    const queryClient = useQueryClient();

    // Queries
    const { mutate, isLoading } = useMutation(postTransactions, {
        onSuccess: (file) => {
            console.log(file);
            const message = "success";
            alert(message);
        },
        onError: () => {
            alert("there was an error");
        },
        onSettled: () => {
            queryClient.invalidateQueries("create");
        },
    });

    let data = new FormData();
    const [file, setFile] = useState();

    const handleUpload = async () => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        try {
            console.log("initiating upload", file);
            console.log("initiating upload", file[0]);

            data.append("file",file);
            mutate(data);
            console.log("File upload response", file);
        } catch (error) {
            console.error("Error uploading file", error);
        }
    };

    const handleClose = () => {
        console.log("button clicked");
        dialogClose();
    };

    return (
        <div className=" flex w-full flex-col gap-3">
            <div className=" upload flex w-full justify-items-center rounded-md bg-gray-200">
                {/* <button
          className=" p-3 text-sm font-medium text-blue-800"
          onClick={()=>{console.log("button clicked")}}
        >
          Browse
        </button> */}
                <FileInput
                    placeholder="Choose a file"
                    variant="filled"
                    radius="md"
                    value={file}
                    clearable="true"
                    accept=".csv"
                    onChange={setFile}
                />
            </div>

            <div className="flex flex-row gap-2 place-self-end">
                <Button
                    bgColor="blue"
                    color="White"
                    size="sm font-bold"
                    text="Upload"
                    borderRadius="10px"
                    actionFunc={handleUpload}
                />
                <Button
                    bgColor="Red"
                    color="White"
                    size="sm font-bold"
                    text="Close"
                    borderRadius="10px"
                    actionFunc={handleClose}
                />
            </div>
        </div>
    );
}

export default UploadFile;
