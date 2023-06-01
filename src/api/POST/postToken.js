import userAxiosInstance from "../../services/userAxios";

export const postToken = async (formData) => {
    const response = await userAxiosInstance.post("/auth/login", formData);
    return response
}