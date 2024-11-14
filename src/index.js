import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { UsersContextProvider } from "./context/UsersContext";
import { MoviesContextProvider } from "./context/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsersContextProvider>
        <AuthContextProvider>
          <MoviesContextProvider>
            <App />
          </MoviesContextProvider>
        </AuthContextProvider>
    </UsersContextProvider>
  </React.StrictMode>
);
