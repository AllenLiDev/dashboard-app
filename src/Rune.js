import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import RuneImage from './RuneImage';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { getSetName, getStatName, getRuneGrade } from './helper';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  info: {
    height: '100%',
  },
  heading: {

  },
}));

const Rune = (props) => {
  const classes = useStyles();
  const rune = props.rune;
  console.log(rune)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.heading}>
            +{rune.upgrade_curr}
            {getSetName(rune.set_id)} rune
          ({rune.slot_no})
          <CloseIcon />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.secondaryStats}>
            <Grid item>
              <RuneImage />
              <div>
                {rune.pri_eff}
                {rune.prefix_eff}
              </div>
            </Grid>
            <List>
              <ListItem>
                <ListItemText primary={rune.sec_eff[0]} />
              </ListItem>
              <ListItem>
                <ListItemText primary={rune.sec_eff[1]} />
              </ListItem>
              <ListItem>
                <ListItemText primary={rune.sec_eff[2]} />
              </ListItem>
              <ListItem>
                <ListItemText primary={rune.sec_eff[3]} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.info}>
            <List>
              <ListItem>
                <ListItemText primary={getRuneGrade(rune.extra)} />
              </ListItem>
              <ListItem>
                <ListItemText primary='calculated efficiency' />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Rune;
