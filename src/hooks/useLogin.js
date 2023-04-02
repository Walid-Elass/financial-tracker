import axiosInstance from "../services/axios";
import { setSession } from "../utils/session";
import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const getTokens = async (email, password) => {
    console.log("Token call triggered");
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    const response = await axiosInstance.post("/auth/login", formData);
    setSession(response.data.access_token, response.data.refresh_token);
  };

  const login = async (email, password) => {
    console.log("Login call triggered");
    console.log(email, "|", password);

    await getTokens(email, password);
    const response = await axiosInstance.get("/users/me");
    console.log("Logged In successfully");
    const { data: user } = response;

    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    });
  };

  return { login };
};
