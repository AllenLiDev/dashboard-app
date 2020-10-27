// array with rune set names
const setNames = [
  'Energy', 'Guard', 'Swift', 'Blade', 'Rage', 'Focus', 'Endure', 'Fatal', '9. Error', 'Despair',
  'Vampire', '12. Error', 'Violent', 'Nemesis', 'Will', 'Shield', 'Revenge', 'Despair', 'Fight',
  'Determination', 'Enhance', 'Accuracy', 'Tolerance'
];

// returns the name of rune set for given id
const getSetName = (id) => {
  return setNames[id-1];
};

// array with stat type names
const statNames = [
  'HP+', 'HP%', "ATK+", "ATK%", 'DEF+', "DEF%", '7. Error', 'SPD', 'CRI RATE', 'CRI DMG', 'Resistance', 'Accuracy'
];

// returns the name of type of stat for given id
const getStatName = (id) => {
  return statNames[id-1];
};

export {
  getSetName,
  getStatName
}
