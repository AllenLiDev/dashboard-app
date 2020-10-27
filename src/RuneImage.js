import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import runeImage from './rune.jpg';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const RuneImage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      <img className={classes.img} alt={'Rune Image'} src={runeImage} />
    </div>
  )
}

export default RuneImage;
