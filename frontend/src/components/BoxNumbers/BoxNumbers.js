import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './BoxNumbers.scss';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

function BoxNumbers(props) {
  const { classes } = props;

  let numbers = props.numbers;
  numbers = numbers.split('');

  return (
    <div className="boxNumbers">
      {numbers.map((number, index) => (
        <span key={index}>{number}</span>
      ))}
    </div>
  );
}

export default withStyles(styles)(BoxNumbers);
