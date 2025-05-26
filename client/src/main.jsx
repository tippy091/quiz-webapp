import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { router } from "./router.jsx";
import ApplicationWrapper from "./Components/ApplicationWrapper/ApplicationWrapper.jsx";
import { Provider } from "react-redux";

import store from "./Reducer/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <ApplicationWrapper />
    </RouterProvider>
  </Provider>
);
