import React from "react";
import {Login, Header} from "../components/login";

const LoginPage = () => {
  return (
    <div className=" flex w-screen h-screen items-center justify-center">
      <div className="  bg-main-bg px-8 py-8 shadow-lg rounded-lg">
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet ? "
          linkName="Register"
          linkUrl="/register"
        />
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
