import api from "../../api";

export function getOriginTier(tier, previousChoice) {
  return function thunk(dispatch, getState) {
    console.log("firing request");
    let url;
    console.log(isNaN(previousChoice));
    if (!isNaN(previousChoice)) {
      url = `/origin/${tier}?choice=${previousChoice}`;
    } else {
      url = `/origin/${tier}`;
    }

    api(url).then(choices => dispatch(tierChoices(choices)));
  };
}
export function clearStore(array) {
  return function thunk(dispatch, getState) {
    const state = getState();
    array.forEach(entry => {
      if (state.builder.tiers[entry]) {
        dispatch(clearEntry(entry));
      }
    });
  };
}

export function tierChoices(payload) {
  return {
    type: "TIER_CHOICES",
    payload: payload
  };
}

export function clearEntry(entry) {
  return {
    type: "CLEAR_ENTRY",
    payload: entry
  };
}
