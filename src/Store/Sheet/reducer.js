const defaultState = null;

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "GOT_SHEET":
      return action.payload;

    default:
      return state;
  }
}
