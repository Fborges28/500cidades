import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FullContainer from '../FullContainer';
import Logo from '../../components/Logo';
import LogBookCard from '../../components/LogBookCard';
import Slider from '../../components/Slider';

import './LogBookContainer.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex',
  },
});

function LogBookContainer(props) {
  const { classes } = props;
  return (
    <FullContainer extraClass="LogBook">
      <Grid container spacing={24}>
        <Grid item xs={12} md={6} lg={4}>
          <LogBookCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LogBookCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LogBookCard />
        </Grid>
      </Grid>
    </FullContainer>
  );
}

LogBookContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogBookContainer);
