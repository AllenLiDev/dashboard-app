import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import RuneImage from './RuneImage';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { getSetName, getStatName, getRuneGrade } from './helper';
import RuneSecondaryStatsList from './RuneSecondaryStatsList';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  info: {
    height: '100%',
  },
  heading: {
    textAlign: 'Center',
  },
  closeIcon: {
    right: 0,
  }
}));

const Rune = (props) => {
  const classes = useStyles();
  const rune = props.rune;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.heading}>
            +{rune.upgrade_curr}
            {getSetName(rune.set_id)} Rune
            ({rune.slot_no})
          <CloseIcon className={classes.closeIcon}/>
          </Paper>
        </Grid>
        <Grid item container xs={9} direction="column">
          <Grid item container spacing={1}>
            <Grid item>
              <RuneImage />
            </Grid>
            <Grid item>
              <h2>{getStatName(rune.pri_eff[0])}{rune.pri_eff[1]}</h2>
              <h4>{getStatName(rune.prefix_eff[0])}{rune.prefix_eff[1]}</h4>
            </Grid>
          </Grid>
          <Grid item>
            <RuneSecondaryStatsList stats={rune.sec_eff}/>
          </Grid>
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
