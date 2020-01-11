import api from "../../api";

export function getMoreInfo(pick) {
  return function thunk(dispatch, getState) {
    console.log(pick, "to the backend!");
    let url = `/origin/option/${pick}`;

    api(url).then(info => {
      console.log(info);
      dispatch(setOptions(info));
    });
  };
}

function setOptions(payload) {
  return {
    type: "SET_OPTIONS",
    payload: payload
  };
}