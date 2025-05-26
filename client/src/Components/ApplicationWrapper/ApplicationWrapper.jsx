import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import Spinner from "../Spinner/Spinner";
const ApplicationWrapper = () => {
  const isLoading = useSelector((state) => state.commonState?.isLoading);
  return (
    <div>
      <Navigation />
      <Outlet />
      {isLoading && <Spinner />}
    </div>
  );
};

export default ApplicationWrapper;
