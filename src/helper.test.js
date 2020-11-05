const { getSetName, getStatName, getSetId, getStatId, getRuneGrade, fastestInSet } = require('./helper');

test('returns Energy for setID 1', () => {
  expect(getSetName(1)).toBe('Energy');
});
