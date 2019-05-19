import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

function BoxNumbers(props) {
  const { classes, extraClass } = props;

  let numbers = props.numbers;
  numbers = numbers.split('');

  return (
    <div className={`boxNumbers ${extraClass ? extraClass : ""}`}>
      {numbers.map((number, index) => (
        <span key={index}>{number}</span>
      ))}
      <p>{props.info}</p>
    </div>
  );
}

export default withStyles(styles)(BoxNumbers);
