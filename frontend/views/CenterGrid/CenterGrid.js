import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';

import HTMLHead from '../../components/Head';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex',
  },
  mainContainer: {
    [theme.breakpoints.up('lg')]: {
      width: 1170,
    },
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes, children } = props;

  return (
    <div className={classes.root}>
      <HTMLHead />
      <Grid container spacing={24} className={classes.mainContainer}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
