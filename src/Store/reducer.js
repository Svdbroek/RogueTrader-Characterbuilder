import { combineReducers } from "redux";
import builderReducer from "./Builder/reducer";

export default combineReducers({
  builder: builderReducer
});
