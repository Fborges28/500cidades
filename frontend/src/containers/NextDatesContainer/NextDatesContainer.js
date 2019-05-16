import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FullContainer from '../FullContainer';
import Logo from '../../components/Logo';
import DateCard from '../../components/DateCard';
import Slider from '../../components/Slider';

import './NextDatesContainer.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex',
  },
});

function NextDatesContainer(props) {
  const { classes } = props;
  const a = <DateCard />;
  const items = [a, a, a, a, a];
  return (
    <FullContainer extraClass="NextDates">
      <Slider items={items} />
    </FullContainer>
  );
}

NextDatesContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NextDatesContainer);
