import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { router } from "./router.jsx";
import ApplicationWrapper from "./Components/ApplicationWrapper/ApplicationWrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ApplicationWrapper />
    </RouterProvider>
  </React.StrictMode>
);
