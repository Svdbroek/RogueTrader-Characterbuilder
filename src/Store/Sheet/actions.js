import api from "../../api";

export function getSheet(characterId) {
  return function thunk(dispatch, getState) {
    let url = `/character/${characterId}/`;
    console.log("yeet", characterId);
    api(url).then(sheet => dispatch(gotSheet(sheet)));
  };
}

function gotSheet(payload) {
  return {
    type: "GOT_SHEET",
    payload: payload
  };
}
