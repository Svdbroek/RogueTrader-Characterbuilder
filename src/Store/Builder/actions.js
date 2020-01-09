import api from "../../api";

export function getOriginTier(tier, previousChoice) {
  return function thunk(dispatch, getState) {
    console.log("firing request");
    let url;
    console.log(previousChoice);
    if (previousChoice) {
      url = `/origin/${tier}?${previousChoice}`;
    } else {
      url = `/origin/${tier}`;
    }

    console.log(api(url));
  };
}
