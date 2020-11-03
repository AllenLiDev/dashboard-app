import React from 'react';
import Runes from './Runes';
import Stats from './Stats';
import RuneMenu from './RuneMenu';

// data import
import testData from './swarfarm.json';
import originalTestData from './exporter.json';
import {fastestInSet} from './helper';

const runesDB = [];

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
  // unequipped
  const runes = originalTestData.runes;
  // equipped
  const units = originalTestData.unit_list;
  for(const unit of units) {
    for(const rune of unit.runes) {
      runes.push(rune);
    }
  }

  return (
    <div className="App">
      {runes.length} runes found
      <Runes data={runes}/>
      <Stats fastest={fastestInSet(runes)} />
      <RuneMenu />
    </div>
  );
}

export default App;
