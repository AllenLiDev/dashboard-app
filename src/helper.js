import Runes from "./Runes";

// array with rune set names
const setNames = [
  'Energy', 'Guard', 'Swift', 'Blade', 'Rage', 'Focus', 'Endure', 'Fatal', '9. Error', 'Despair',
  'Vampire', '12. Error', 'Violent', 'Nemesis', 'Will', 'Shield', 'Revenge', 'Despair', 'Fight',
  'Determination', 'Enhance', 'Accuracy', 'Tolerance'
];

// returns the name of rune set for given id
const getSetName = (id) => {
  return setNames[id - 1];
};

// return the id of rune set for given name
const getSetId = (name) => {
  return setNames.indexOf(name) + 1;
};

// array with stat type names
const statNames = [
  'HP+', 'HP%', "ATK+", "ATK%", 'DEF+', "DEF%", '7. Error', 'SPD', 'CRI RATE', 'CRI DMG', 'Resistance', 'Accuracy'
];

// returns the name of type of stat for given id
const getStatName = (id) => {
  return statNames[id - 1];
};

// return the id of rune stat for given name
const getStatId = (name) => {
  return statNames.indexOf(name) + 1;
};

// array with grades
const runeGrades = [
  'Normal', 'Normal', 'Magic', 'Rare', 'Epic', 'Legendary'
]

// return the grade of rune for given value
const getRuneGrade = (value) => {
  return runeGrades[value - 1];
}

// returns the fastest rune for set, slot, default 5
const fastestInSet = (data, set, slot, amount) => {
  let fastest = [
    [5, {}],
    [4, {}],
    [3, {}],
    [2, {}],
    [1, {}],
  ];

  for (const rune of data) {
    for (const subStat of rune['sec_eff']) {
      if (subStat[0] === 8) {
        for (let i = 0; i < 5; i++) {
          if (subStat[1] > fastest[i][0]) {
            fastest.splice(i, 0, [subStat[1], rune]);
            break;
          }
        }
      }
    }
  }
  fastest = fastest.slice(0, amount ? amount : 5);
  return fastest;
}

// returns efficient of given rune
const efficiency = (rune) => {
  // pseudo
  // calculate individual efficiency for each substat
  // take substat divided by maximum roll and return that number
  // add all individual substat number
  // add any inate number - same calculation
  // divided by 5
  // *edge case can exist ancient runes, but i think calculatino same

  // return a percent in decimal or number or string
  return 0;
}

const recommendation = (runes) => {
  // foreach
  // get all with inate
  // sort by resist -> acc -> cdmg -> crit
  // sort by spd / cdmg /att
  // cross check with low spd and slots that need help most
  return 0;
}

export {
  getSetName,
  getStatName,
  getSetId,
  getStatId,
  getRuneGrade,
  fastestInSet,
  efficiency,
  recommendation,
}
