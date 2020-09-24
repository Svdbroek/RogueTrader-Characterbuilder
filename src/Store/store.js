import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import {
  responsiveStoreEnhancer,
  createResponsiveStateReducer,
} from "redux-responsive";

//core middleware
import { apiMiddleware } from "./api/api.middleware.js";
import { APP, LOGOUT } from "./app/app.acs.js";

//entity middleware
import { characterBuilderMiddleware } from "./CharacterBuilder/characterBuilder.middleware.js";

//reducers
import appReducer from "./app/app.reducer.js";
import characterBuilderReducer from "./CharacterBuilder/characterBuilder.reducer.js";
import { actionSplitterMiddleware } from "./coreMiddleware/actionsplitter.middleware.js";

const coreReducer = combineReducers({
  browser: createResponsiveStateReducer({
    phone: 420,
    tablet: 768,
    laptop: 1280,
    desktop: 1440,
  }),
  app: appReducer,
  characterBuilder: characterBuilderReducer,
});

const rootReducer = (state, action) => {
  if (action.type === `${APP} ${LOGOUT}`) {
    state = undefined;
  }
  return coreReducer(state, action);
};

const entityMiddleware = [characterBuilderMiddleware];

const coreMiddleware = [actionSplitterMiddleware, apiMiddleware];

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const setupStore = (state) =>
  createStore(
    rootReducer,
    // devCompose(responsiveStoreEnhancer, applyMiddleware(thunk, ...entityMiddleware, ...coreMiddleware)),
    devCompose(
      responsiveStoreEnhancer,
      applyMiddleware(...entityMiddleware, ...coreMiddleware)
    )
  );

export default setupStore();
