const defaultState = {
  redirect: false,
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case `{APP} {REDIRECT}`: {
      return { ...state, redirect: action.payload };
    }

    default:
      return state;
  }
}
