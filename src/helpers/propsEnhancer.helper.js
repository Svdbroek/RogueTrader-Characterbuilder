import store from "../Store/index.js";

export default function propsEnhancer(arg) {
  const redirect = store.getState().app.redirect;

  return { ...arg, redirect };
}
