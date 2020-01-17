import api from "../../api";
import { getStats } from "../statsRoller/actions";

export function submitAction(name) {
  return function thunk(dispatch, getState) {
    const state = getState();
    let form = state.subsection.choices;
    form = { ...form, name: name };
    console.log(form, "form");
    api("/character/new", { method: "Post", body: form }).then(response => {
      console.log(response);
      dispatch(getStats(response.id));
    });
  };
}
