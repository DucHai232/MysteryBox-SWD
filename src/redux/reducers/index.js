import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import packageReducer from "./package.reducer";

export const reducers = combineReducers({
  authReducer,
  packageReducer,
});
