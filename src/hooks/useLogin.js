import { postToken } from "../api/Token/POST/postToken";
import userAxiosInstance from "../services/userAxios";
import { setSession } from "../utils/session";
import { useAuthContext } from "./";
import { useState } from "react";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const getTokens = async (email, password) => {
    console.log("Token call triggered");
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    const response = await postToken(formData);
    setSession(response.data.access_token, response.data.refresh_token);
  };

  const login = async (email, password) => {
    console.log("Login call triggered");
    console.log(email, "|", password);

    await getTokens(email, password);
    const response = await userAxiosInstance.get("/users/me");
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

export default useLogin
