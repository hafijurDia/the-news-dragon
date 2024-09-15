import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import LanguageProvider from "./providers/LanguageProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <RouterProvider router={router}></RouterProvider>
      </LanguageProvider>
    </AuthProvider>
  </React.StrictMode>
);
