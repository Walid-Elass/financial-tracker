import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthProvider } from "./contexts/JWTAuthContext";

ReactDOM.render(
  <AuthProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </AuthProvider>
,
  document.getElementById("root")
);
