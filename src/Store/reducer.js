import { combineReducers } from "redux";
import originPathReducer from "./originpath/originPath.reducer.js";
import birthrightReducer from "./originpath/birthright.reducer.js";
import careerReducer from "./originpath/career.reducer.js";
import homeworldReducer from "./originpath/homeworld.reducer.js";
import lureOfTheVoidReducer from "./originpath/lureOfTheVoid.reducer.js";
import motivationReducer from "./originpath/motivation.reducer.js";
import trailsReducer from "./originpath/trails.reducer.js";
import appReducer from "./app/app.reducer.js";

export default combineReducers({
  originPath: originPathReducer,
  birthright: birthrightReducer,
  career: careerReducer,
  homeworld: homeworldReducer,
  lureOfTheVoid: lureOfTheVoidReducer,
  motivation: motivationReducer,
  trails: trailsReducer,
  app: appReducer,
});
