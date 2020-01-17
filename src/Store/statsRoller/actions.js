import api from "../../api";

export function getStats(characterId) {
  return function thunk(dispatch, getState) {
    let url = `/character/${characterId}/stats`;
    console.log("yeet", characterId);
    api(url).then(stats => dispatch(gotStats(stats)));
  };
}

export function sumbitStateAction(body, characterId) {
  return function thunk(dispatch, getState) {
    let url = `/character/${characterId}/stats`;
    console.log(body, " to the backend!", url);
    api(url, { method: "PUT", body: body }).then(response =>
      dispatch(gotSheet(response))
    );
  };
}

function gotStats(payload) {
  return {
    type: "GOT_STATS",
    payload: payload
  };
}

function gotSheet(payload) {
  return {
    type: "GOT_SHEET",
    payload: payload
  };
}
