import transactionsAxiosInstance from "../../services/transactionAxios"


export const getTransactions = async () => {
    const response = await transactionsAxiosInstance.get("/transactions/all")
    console.log(response)
    return response
  }