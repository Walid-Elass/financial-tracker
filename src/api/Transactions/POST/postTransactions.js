import transactionsAxiosInstance from "../../../services/transactionAxios"

export const postTransactions = async (file) => {
  console.log("Endpoint file",file)
  const response = await transactionsAxiosInstance.post("/transactions/import",file,{headers:{'Content-Type': 'multipart/form-data'}})
  console.log(response)
  return response
  }