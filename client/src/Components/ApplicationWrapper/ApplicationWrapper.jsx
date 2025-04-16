import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const ApplicationWrapper = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default ApplicationWrapper;
