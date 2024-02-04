import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import GlobalStore from "./components/GlobalStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStore>
      <RouterProvider router={router} />
    </GlobalStore>
  </React.StrictMode>
);
