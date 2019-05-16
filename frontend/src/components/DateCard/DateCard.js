import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardInfo from '../CardInfo';

import './DateCard.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function DateCard(props) {
  const { classes } = props;

  return (
    <div className="DateCard">
      <CardInfo>
        <Grid container spacing={24} className="no-margin">
          <Grid container wrap="nowrap">
            <Grid xs={3} md={4} lg={2} className="DateCard__date">
              <p>24 dez</p>
            </Grid>
            <Grid xs={9} md={8} lg={10} className="DateCard__description">
              <h4 className="DateCard__title">Teste</h4>
              <small>RJ</small>
            </Grid>
          </Grid>
          <Grid item xs={12} className="no-padding DateCard__bottom-container">
            <Button variant="outlined" className={classes.button} fullWidth>
              Ir para o evento
            </Button>
          </Grid>
        </Grid>
      </CardInfo>
    </div>
  );
}

DateCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateCard);
