import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Rune from './Rune';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'class', headerName: 'Class', width: 130 },
  { field: 'rank', headerName: 'Rank', width: 130 },
];

const Runes = (props) => {
  let count = 1;
  for (const rune of props.data) {
    rune.id = count++;
  }
  console.log(props.data);
  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={props.data} columns={columns} pageSize={5} checkboxSelection />
      </div>
      <Rune />
    </div>
  );
}

export default Runes;
