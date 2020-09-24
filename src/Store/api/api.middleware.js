import axios from "axios";
import { API_REQUEST, apiError, apiSuccess } from "./api.actions.js";
import { API_ROOT } from "../../config.js";

export const apiMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);
  if (action.type.includes(API_REQUEST)) {
    console.log("apiMiddleware");
    const {
      url,
      method,
      entity,
      headers,
      auth,
      subEntity,
      cmdType,
      responseType,
    } = action.meta;
    const data = action.payload;

    const store = getState();

    if (auth && store.user) headers.Authorization = store.user.token;
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    axios.defaults.baseURL = API_ROOT;

    axios.defaults.headers.common["Content-Type"] = "application/json";

    axios
      .request({
        url,
        method,
        responseType,
        headers,
        [dataOrParams]: data,
      })
      .then((response) => {
        dispatch(
          apiSuccess({ response: response.data, entity, subEntity, cmdType })
        );
      })
      .catch((error) => {
        console.error(error);
        console.error("error", error.response);
        // we need to normalize and flatten the error response to a standard error response
        const errorData = error.response.data.error
          ? error.response.data.error[0]
          : error.response;
        dispatch(apiError({ error: errorData, entity, subEntity, cmdType }));
      });
  }
};

// Concurrency means, essentially, that task A and task B both need to happen independently of each other, and A starts running, and then B starts before A is finished.
