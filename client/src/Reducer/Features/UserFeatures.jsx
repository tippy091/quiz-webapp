import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loadUserInfo: (state, action) => {
      return {
        ...state,
        userInfo: action?.payload,
      };
    },
  },
});

export const { loadUserInfo } = userSlice?.actions;
export default userSlice?.reducer;
