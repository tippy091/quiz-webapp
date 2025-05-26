import { createBrowserRouter } from "react-router-dom";
import ApplicationWrapper from "./Components/ApplicationWrapper/ApplicationWrapper";
import App from "./App";
import Admin from "./Components/AdminPanel/Admin";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "/auth/",
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <Dashboard />,
  },
  {
    path: "/admin/",
    element: <Admin />,
  },
]);
