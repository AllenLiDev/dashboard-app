import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { getStatName } from './helper';

const RuneSecondaryStatsList = (props) => {
  const stats = props.stats;
  const runeListItems = stats.map((substat) =>
    <ListItem>
      <ListItemText primary={getStatName(substat[0]) + substat[1]} />
    </ListItem>
  )

  return (
    <List>
      {runeListItems}
    </List>
  )
}

export default RuneSecondaryStatsList;
