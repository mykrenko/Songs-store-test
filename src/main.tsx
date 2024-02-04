import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes/routes";
import GlobalStore from "./components/GlobalStore";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStore>
      <RouterProvider router={router} />
    </GlobalStore>
  </React.StrictMode>
);
