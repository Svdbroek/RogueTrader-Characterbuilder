import api from "../../api";

export function submitAction(name) {
  return function thunk(dispatch, getState) {
    const state = getState();
    let form = state.subsection.choices;
    form = { ...form, name: name };
    console.log(form, "form");
    api("/character/new", { method: "Post", body: form });
  };
}
