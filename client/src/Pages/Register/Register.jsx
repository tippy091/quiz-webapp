import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Features/Common";
import LoginBanner from "../../assets/Banners/LoginBanner.png";
import { registerAPI } from "../../API/Authentication";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import VerifyCode from "../VerifyCode/VerifyCode";

const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");

  const [enableVerify, setEnableVerify] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(setLoading(true));
      setError("");
      registerAPI(values)
        .then((res) => {
          if (res?.code === 200) {
            setEnableVerify(true);
          }
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    },
    [dispatch, values]
  );

  const handleOnChange = useCallback((e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target?.value,
    }));
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Bên trái: Form đăng nhập */}
      <div
        className="w-full lg:w-2/5
           max-w-3xl mx-auto my-auto"
      >
        <div className="text-center">
          <img
            src="https://share-gcdn.basecdn.net/brand/logo.full.png"
            alt="Logo"
            className="mx-auto h-12"
          />
          <h2 className="text-2xl font-bold mt-6">Đăng Ký</h2>
          <p className="text-sm text-gray-500 mt-2">
            Chào mừng đến với Base, hãy tạo tài khoản để bắt đầu
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label name="firstname" className="block text-sm font-medium">
              First Name
            </label>
            <input
              onChange={handleOnChange}
              for="firstname"
              type="firstname"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border
                 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First Name của bạn"
              name="firstname"
              required
            />
          </div>
          <div>
            <label name="lastname" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              onChange={handleOnChange}
              for="lastname"
              type="lastname"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border
                 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last Name của bạn"
              name="lastname"
              required
            />
          </div>
          <div>
            <label name="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              onChange={handleOnChange}
              for="email"
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border
                 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email của bạn"
              name="email"
              required
            />
          </div>

          <div>
            <label name="password" className="block text-sm font-medium">
              Mật khẩu
            </label>
            <input
              type="password"
              for="password"
              onChange={handleOnChange}
              name="password"
              className="w-full mt-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mật khẩu của bạn"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2  hover:bg-blue-700 transition"
          >
            Đăng Ký
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <a href="#" className="text-blue-500 hover:underline">
            Đăng nhập với quyền truy cập của tài khoản Khách?
          </a>
        </div>
      </div>

      {/* Bên phải: Hình nền */}
      <div
        className="hidden lg:block w-2/4 bg-gradient-to-b from-blue-600 to-blue-900 relative"
        style={{
          backgroundImage: `url(${LoginBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Add icons floating like the design, or animation here if needed */}
      </div>
    </div>
  );
};

export default Register;
