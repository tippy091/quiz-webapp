import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import VLULogo from "../../assets/vlu-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow flex items-center py-3 px-20 justify-between gap-30">
      <div className="nav-logo">
        <img className="w-[150px]" src={VLULogo} alt="Van Lang University" />
      </div>
      <div className="flex flex-wrap items-center gap-5 flex-1">
        <ul className="flex gap-14 text-gray-600 text-[17px]">
          <li className="hover:text-black">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink
              to="/men"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              DASHBOARD
            </NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink
              to="/women"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              MY COURSES
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center">
        <ul className="flex">
          <li className="text-black  hover:bg-slate-100 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm focus:outline-none px-5 py-1">
            <NavLink
              to={"/auth/login"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              LOGIN
            </NavLink>
          </li>
          <li className="text-black hover:bg-slate-100 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm focus:outline-none px-5 py-1">
            <NavLink
              to={"/auth/register"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              SIGN UP
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
