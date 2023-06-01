import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userAxiosInstance from "../services/userAxios";

const useRegister = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const register = async (user) => {
    try {
      if (user.password == user.confirm_password) {
        const response = await userAxiosInstance.post("/users/create", user);
        if (response.status == 200) {
          navigate("/login", { replace: true, state: { from: location } });
        }
      } else {
        console.log("Password doesn't match");
      }
    } catch (error) {
      console.log(error.response.data.detail);
    }
  };

  return { register };
};

export default useRegister;
