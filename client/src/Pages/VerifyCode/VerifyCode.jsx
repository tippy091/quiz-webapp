import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Features/Common";
import { verifyAPI } from "../../API/Authentication";
import { useNavigate } from "react-router-dom";
import {
  setIsLoggedIn,
  setUser,
} from "../../Reducer/Features/AuthorityFeatures";

const VerifyCode = ({ email }) => {
  const [values, setValues] = useState({
    userName: email,
    code: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setError("");
      dispatch(setLoading(true));
      verifyAPI(values)
        .then((res) => {
          setMessage("Verification Successful");

          dispatch(setIsLoggedIn(true));
          dispatch(
            setUser({
              userName: res?.userName,
            })
          );

          navigate("/");
        })
        .catch((error) => {
          setError(
            "The verification code you have entered is incorrect!",
            error
          );
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    },
    [dispatch, values, navigate]
  );
  const handleOnChange = useCallback((e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target?.value,
    }));
  }, []);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl">
      {!message && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Verification Code
          </h2>

          <form
            className="space-y-4 flex flex-col items-center"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="code"
              maxLength={6}
              onChange={handleOnChange}
              placeholder="Enter your verification code"
              required
              className="h-[48px] w-md border rounded border-gray-600 p-2 mt-4"
            />
            <button
              type="submit"
              className="border w-[120px] rounded-lg h-[48px] bg-blue-500 text-white mb-4"
            >
              Verify
            </button>
          </form>
          {error && <p className="text-xl text-red-600">{error}</p>}
        </div>
      )}
      {message && <p className="text-center text-lg">{message}</p>}
    </div>
  );
};

export default VerifyCode;
