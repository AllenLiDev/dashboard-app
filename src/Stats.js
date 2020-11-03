import React from 'react';

const Stats = (props) => {
  const fastestRunes = props.fastest;

  return (
    <div>{fastestRunes[0][0]}</div>
  )
}

export default Stats;
