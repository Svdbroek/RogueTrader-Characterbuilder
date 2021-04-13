const defaultState = {
  originPath: {
    Homeworld: {
      0: {
        id: 0,
        name: "Death World",
      },
      1: {
        id: 1,
        name: "Void Born",
      },
      2: {
        id: 2,
        name: "Forge World",
      },
      3: {
        id: 3,
        name: "Hive World",
      },
      4: {
        id: 4,
        name: "Imperial World",
      },
      5: {
        id: 5,
        name: "Noble Born",
      },
    },
    Birthright: {
      0: {
        id: 0,
        name: "Scavenger",
      },
      1: {
        id: 1,
        name: "Scapegrace",
      },
      2: {
        id: 2,
        name: "Stubjack",
      },
      3: {
        id: 3,
        name: "Child of the Creed",
      },
      4: {
        id: 4,
        name: "Savant",
      },
      5: {
        id: 5,
        name: "Vaunted",
      },
    },
    Lure: {
      0: {
        id: 0,
        name: "Tainted",
      },
      1: {
        id: 1,
        name: "Criminal",
      },
      2: {
        id: 2,
        name: "Renegade",
      },
      3: {
        id: 3,
        name: "Duty Bound",
      },
      4: {
        id: 4,
        name: "Zealot",
      },
      5: {
        id: 5,
        name: "Chosen By Destiny",
      },
    },
    Trails: {
      0: {
        id: 0,
        name: "The Hand of War",
      },
      1: {
        id: 1,
        name: "Press-ganged",
      },
      2: {
        id: 2,
        name: "Calamity",
      },
      3: {
        id: 3,
        name: "Ship-lorn",
      },
      4: {
        id: 4,
        name: "Dark Voyage",
      },
      5: {
        id: 5,
        name: "High Vendetta",
      },
    },
    Motivation: {
      0: {
        id: 0,
        name: "Endurance",
      },
      1: {
        id: 1,
        name: "Fortune",
      },
      2: {
        id: 2,
        name: "Vengeance",
      },
      3: {
        id: 3,
        name: "Renown",
      },
      4: {
        id: 4,
        name: "Pride",
      },
      5: {
        id: 5,
        name: "Prestige",
      },
    },
    Career: {
      0: {
        id: 0,
        name: "Astropath Trancendent",
      },
      1: {
        id: 1,
        name: "Arch-Militant",
      },
      2: {
        id: 2,
        name: "Void-Master",
      },
      3: {
        id: 3,
        name: "Explorator",
      },
      4: {
        id: 4,
        name: "Missionary",
      },
      5: {
        id: 5,
        name: "Seneschal",
      },
      6: {
        id: 6,
        name: "Navigator",
      },
      7: {
        id: 7,
        name: "Rogue Trader",
      },
    },
  },
};

export default function originPathReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
