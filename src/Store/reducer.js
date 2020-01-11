import { combineReducers } from "redux";
import builderReducer from "./Builder/reducer";
import subsectionReducer from "./Subsection/reducer";

export default combineReducers({
  builder: builderReducer,
  subsection: subsectionReducer
});
