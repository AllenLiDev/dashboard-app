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
      runesDB.push(rune)
    )
  )
  return (
    <ul>{equippedRuneList}</ul>
  );
}

const App = () => {
  const runes = testData.runes;
  const units = testData.unit_list;
  for(const unit of units) {
    for(const rune of unit.runes) {
      runes.push(rune);
    }
  }
  console.log(runes);
  return (
    <div className="App">
      {runes.length} runes found
    </div>
  );
}

export default App;
