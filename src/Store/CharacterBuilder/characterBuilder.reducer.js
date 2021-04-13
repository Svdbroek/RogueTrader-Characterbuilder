const defaultState = {
  tiers: {
    Homeworld: null,
    Birthright: null,
    Lure: null,
    Trails: null,
    Motivation: null,
    Career: null,
  },
};

export default function characterBuilderReducer(state = defaultState, action) {
  switch (action.type) {
    case "TIER_CHOICES":
      const key = Object.keys(action.payload);
      return {
        tiers: {
          ...state.tiers,
          [key]: action.payload[key],
        },
      };
    case "CLEAR_ENTRY":
      const entry = action.payload;
      return { tiers: { ...state.tiers, [entry]: null } };

    default:
      return state;
  }
}
