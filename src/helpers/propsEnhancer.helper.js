import store from "../Store/store.js";

export default function propsEnhancer(arg) {
  const redirect = store.getState().app.redirect;

  return { ...arg, redirect };
}
