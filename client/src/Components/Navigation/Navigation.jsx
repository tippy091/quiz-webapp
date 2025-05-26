import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";
import VLULogo from "../../assets/vlu-logo.png";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { isLoggedIn, user } = useSelector((state) => state.userAuthority);

  return (
    <nav className=" bg-[#2051C7] top-0 left-0 w-full z-50 shadow flex items-center py-3 px-20 justify-between gap-30">
      <div className="nav-logo">
        <Link to="/">
          <img
            className="h-[30px]"
            src="https://datax-talent.basecdn.net/baseinc/logo.png"
          />
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-5 flex-1">
        <ul className="flex gap-14 text-white text-[13px]">
          <li className="hover:underline">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              SẢN PHẨM
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/men"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              GIẢI PHÁP
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/women"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              KHÁCH HÀNG
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/men"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              CÔNG TY
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/women"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              RESOURCES
            </NavLink>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <div className="flex flex-wrap text-white  items-center">
          <ul className="flex">
            <li className=" hover:underline">
              <NavLink
                to={"/auth/login"}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                PROFILE
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex text-white flex-wrap items-center">
          <ul className="flex gap-5 text-white text-[13px]">
            <li className="hover:underline">
              <NavLink
                to={"/auth/login"}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                ĐĂNG NHẬP
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink
                to={"/auth/register"}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                ĐĂNG KÝ
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
