const defaultState = {};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_OPTIONS":
      const key = Object.keys(action.payload);
      return {
        ...state,
        [key]: action.payload[key]
      };

    default:
      return state;
  }
}
