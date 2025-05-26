import userReducer from "./Features/UserFeatures";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/AuthorityFeatures";

const rootReducer = combineReducers({
  userState: userReducer,
  userAuthority: authReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
