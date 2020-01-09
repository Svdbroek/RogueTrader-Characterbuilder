const defaultState = { tiers: { Homeworld: null } };

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "TIER_CHOICES":
      return { ...state, tiers: action.payload };

    default:
      return state;
  }
}
