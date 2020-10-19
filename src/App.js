import React from 'react';
import testData from './headhuntar_swarfarm_win10_optimizer_export.json';

// get all unequiped runes
const RuneList = (props) => {
  const runes = testData.runes;
  const runeList = runes.map((rune) =>
    <li>{rune.rune_id}</li>
  );
  return (
    <ul>{runeList}</ul>
  );
}

// get all equipped runes
const EquippedRuneList = (props) => {
  const units = testData.unit_list;
  const equippedRuneList = units.map((unit) =>
    unit.runes.map(rune =>
      <li>{rune.rune_id}</li>
    )
  )
  return (
    <ul>{equippedRuneList}</ul>
  );
}

const App = () => {
  console.log(testData);
  return (
    <div className="App">
      <RuneList />
      <EquippedRuneList />
    </div>
  );
}

export default App;
