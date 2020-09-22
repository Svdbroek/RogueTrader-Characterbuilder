const defaultState = {
  0: {
    id: 0,
    title: "Death World",
    description: "....",
    effects: [
      "modifiers",
      "skills",
      "hardened",
      "bleed",
      "paranoid",
      "survivor",
      "wounds",
      "fate",
    ], // effects and choices at the end of the object
    modifiers: {
      title: "Character Modifiers",
      description: "You gain ...",
    },
    skills: {
      title: "skills",
      description: "...",
    },
    hardened: {
      title: "hardened",
      description: "...",
      choice: ["jaded", "poison"],
    },
    jaded: {
      title: "Talent: Jaded",
      description: "...",
    },
    bleed: {
      title: "If it Bleeds, I Can Kill It",
      description: "...",
    },
    paranoid: {
      title: "Paranoid",
      description: "...",
    },
    survivor: {
      title: "Survivor",
      description: "...",
    },
    wounds: {
      title: "Starting Wounds",
      description: "...",
    },
    fate: {
      title: "Starting Fate Points",
      description: "...",
    },
    poison: {
      title: "Talent: Resistance (Poison)",
      description: "...",
    },
  },
  1: {
    id: 1,
    title: `Void Born`,
    description: "...",
    effects: [
      "modifiers",
      "skills",
      "charmed",
      "omen",
      "shipwise",
      "accustomed",
      "wounds",
      "fate",
    ],
    modifiers: {
      title: "Character Modifiers",
      description: "You gain...",
    },
    skills: {
      title: "skills",
      description: "You gain...",
    },
    charmed: {
      title: "Charmed",
      description: "...",
    },
    omened: {
      title: "Ill-omened",
      description: "...",
    },
    shipwise: {
      title: "Shipwise",
      description: "...",
    },
    accustomed: {
      title: "Void Accustomed",
      description: "...",
    },
    wounds: {
      title: "Starting Wounds",
      description: "...",
    },
    fate: {
      title: "Starting Fate Points",
      description: "You gain...",
    },
  },
  2: {
    id: 2,
    title: `Forge World`,
    description: "...",
    effects: [
      "modifiers",
      "skills",
      "credo",
      "purpose",
      "cult",
      "wounds",
      "fate",
    ],
    modifiers: {
      title: "Character Modifiers",
      description: "You gain...",
    },
    skills: {
      title: "skills",
      description: "You gain...",
    },
    credo: {
      title: "Credo Omnissiah",
      description: "...",
    },
    purpose: {
      title: "Fit For Purpose",
      description: "...",
      choice: ["WS", "BS", "S", "T", "Ag", "Int", "Per", "WP", "fel"],
    },
    cult: {
      title: "Stranger to the Cult",
      description: "...",
    },
    WS: {
      title: "Weapon Skill",
      description: "...",
    },
    BS: {
      title: "Balistics Skill",
      description: "...",
    },
    S: {
      title: "Strength",
      description: "...",
    },
    T: {
      title: "Toughness",
      description: "...",
    },
    Ag: {
      title: "Agility",
      description: "...",
    },
    Int: {
      title: "Intelligence",
      description: "...",
    },
    Per: {
      title: "Perception",
      description: "...",
    },
    WP: {
      title: "Willpower",
      description: "...",
    },
    fel: {
      title: "Fellow",
      description: "...",
    },
    wounds: {
      title: "Starting Wounds",
      description: "...",
    },
    fate: {
      title: "Starting Fate Points",
      description: "You gain...",
    },
  },
};

export default function homeworldReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
