import React from 'react';
import testData from './headhuntar_swarfarm_win10_optimizer_export.json';

const RuneList = (props) => {
  const runes = testData.runes;
  const runeList = runes.map((rune) =>
    <li>{rune.rune_id}</li>
  );
  return (
    <ul>{runeList}</ul>
  );
}

const App = () => {
  return (
    <div className="App">
      <RuneList />
    </div>
  );
}

export default App;
