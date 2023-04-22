import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Footer, Sidebar, Authenticated, PublicRoute } from "./components";
import { Transactions, Homepage, LoginPage, RegisterPage } from "./pages";
import { useState } from "react";
import { useAuthContext } from "./hooks";
import PrivateLayout from "./components/layouts/PrivateLayout";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const { state } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        {!state.isInitialized ? (
          <div className="text-3xl text-red-700">Page is loading</div>
        ) : (
          <Routes>
            {/* login */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            {/* Dashboard */}
            <Route
              path="/Homepage"
              element={
                <Authenticated>
                  <PrivateLayout>
                    <Homepage />
                  </PrivateLayout>
                </Authenticated>
              }
            />
            {/* Details */}
            <Route
              path="/transactions"
              element={
                <Authenticated>
                  <PrivateLayout>
                    <Transactions />
                  </PrivateLayout>
                </Authenticated>
              }
            />
            <Route path="/edit" element="edit" />
            <Route path="*" element={<Navigate to="/Homepage" />} />
          </Routes>
        )}
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
