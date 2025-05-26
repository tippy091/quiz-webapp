import userReducer from "./Features/UserFeatures";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/AuthorityFeatures";
import commonReducer from "./Features/CommonFeatures";

const rootReducer = combineReducers({
  userState: userReducer,
  userAuthority: authReducer,
  commonState: commonReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
