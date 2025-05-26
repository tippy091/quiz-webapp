import { createSlice } from "@reduxjs/toolkit";

const authoritySlice = createSlice({
  name: "userAuthority",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action?.payload;
    },
    setUser: (state, action) => {
      state.user = action?.payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setIsLoggedIn, setUser, logOut } = authoritySlice?.actions;
export default authoritySlice?.reducer;
