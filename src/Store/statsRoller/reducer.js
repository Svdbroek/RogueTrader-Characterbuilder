const defaultState = {
  stats: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "GOT_STATS": {
      return { ...state, stats: action.payload };
    }

    default:
      return state;
  }
}
