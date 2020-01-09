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

    api(url).then(choices => dispatch(tierChoices(choices)));
  };
}

export function tierChoices(payload) {
  return {
    type: "TIER_CHOICES",
    payload: payload
  };
}
