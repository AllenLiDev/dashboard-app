import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Rune from './Rune';
import runeImage from './rune.jpg';


const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    maxWidth: 300,
  },
}));

const runeSets = [
  'None', 'Energy', 'Guard', 'Swift', 'Blade', 'Rage', 'Focus', 'Endure', 'Fatal', 'Despair',
  'Vampire', 'Violent', 'Nemesis', 'Will', 'Shield', 'Revenge', 'Despair', 'Fight',
  'Determination', 'Enhance', 'Accuracy', 'Tolerance'
];


const statNames = [
  'None', 'HP+', 'HP%', "ATK+", "ATK%", 'DEF+', "DEF%", 'SPD', 'CRI RATE', 'CRI DMG', 'Resistance', 'Accuracy'
];

const RuneMenu = (props) => {
  const classes = useStyles();

  const [runeFilter, setRuneFilter] = useState('None');
  const [slotFilter, setSlotFilter] = useState();
  const [statFilter, setStatFilter] = useState('None');
  const [subStatOne, setSubStatOne] = useState('None');
  const [subStatTwo, setSubStatTwo] = useState('None');


  let count = 1;
  for (let rune of props.data) {
    rune.id = count++;
  }

  const changeRune = (event) => {
    setRuneFilter(event.target.value);
  };

  const changeStat = (event) => {
    setStatFilter(event.target.value);
  };

  const changeSubStatOne = (event) => {
    setSubStatOne(event.target.value);
  };

  const changeSubStatTwo = (event) => {
    setSubStatTwo(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item xs={6} direction="column">
          <Grid item>
            <Rune rune={props.data[0]} />
          </Grid>
          <Grid item>
            <Rune rune={props.data[1]} />
          </Grid>
        </Grid>
        <Grid container item xs={6} direction="column">
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Rune Set</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={runeFilter}
                onChange={changeRune}
              >
                {runeSets.map((set) => (
                  <MenuItem value={set}>{set}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Stat</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statFilter}
                onChange={changeStat}
              >
                {statNames.map((stat) => (
                  <MenuItem value={stat}>{stat}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">SubStat1</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subStatOne}
                onChange={changeSubStatOne}
              >
                {statNames.map((stat) => (
                  <MenuItem value={stat}>{stat}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Substat2</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subStatTwo}
                onChange={changeSubStatTwo}
              >
                {statNames.map((stat) => (
                  <MenuItem value={stat}>{stat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <GridList cellHeight={80} className={classes.gridList} cols={6}>
            {runeSets.map((tile) => (
              <GridListTile cols={1}>
                <img src={runeImage} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    </div>
  )
}

export default RuneMenu;