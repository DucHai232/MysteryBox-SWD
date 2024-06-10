import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import packageReducer from "./package.reducer";
import kidReducer from "./kid.reducer";
import themeReducer from "./theme.reducer";
import packageOrderReducer from "./packageOrder.reducer";
import lightdarkReducer from "./lightdark.reducer";
import boxReducer from "./box.reducer";
import oauthReducer from "./oauth.reducer";

export const reducers = combineReducers({
  authReducer,
  packageReducer,
  kidReducer,
  themeReducer,
  packageOrderReducer,
  lightdarkReducer,
  boxReducer,
  oauthReducer,
});
