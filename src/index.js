import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthProvider } from "./contexts/JWTAuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client = {queryClient}>
    <AuthProvider>
      <ContextProvider>
        <App />
        <ReactQueryDevtools />
      </ContextProvider>
    </AuthProvider>
  </QueryClientProvider>
,
  document.getElementById("root")
);
