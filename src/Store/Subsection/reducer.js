const defaultState = {};

export default function reducer(state = defaultState, action) {
  let key;
  switch (action.type) {
    case "SET_OPTIONS":
      key = Object.keys(action.payload);
      return {
        ...state,
        [key]: action.payload[key]
      };

    case "SET_CHOICE":
      key = Object.keys(action.payload);
      return {
        ...state,
        choices: { ...state.choices, [key]: action.payload[key] }
      };

    default:
      return state;
  }
}
