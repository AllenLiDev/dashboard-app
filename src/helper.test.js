const { getSetName, getStatName, getSetId, getStatId, getRuneGrade, fastestInSet } = require('./helper');

test('returns Energy for setId = 1', () => {
  expect(getSetName(1)).toBe('Energy');
});

test('return SPD for statId = 8', () => {
  expect(getStatName(8)).toBe('SPD');
});

// describe think component, group with this
// it think indivudual part
