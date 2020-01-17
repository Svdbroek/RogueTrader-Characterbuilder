import { combineReducers } from "redux";
import builderReducer from "./Builder/reducer";
import subsectionReducer from "./Subsection/reducer";
import statsReducer from "./statsRoller/reducer";
import sheetReducer from "./Sheet/reducer";

export default combineReducers({
  builder: builderReducer,
  subsection: subsectionReducer,
  stats: statsReducer,
  sheet: sheetReducer
});
