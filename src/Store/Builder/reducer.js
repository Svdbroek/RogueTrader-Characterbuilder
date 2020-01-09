const defaultState = {
  tiers: {
    Homeworld: null,
    Birthright: null,
    Lure: null,
    Trails: null,
    Motivation: null,
    Career: null
  }
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "TIER_CHOICES":
      const key = Object.keys(action.payload);
      return {
        tiers: {
          ...state.tiers,
          [key]: action.payload[key]
        }
      };

    default:
      return state;
  }
}
