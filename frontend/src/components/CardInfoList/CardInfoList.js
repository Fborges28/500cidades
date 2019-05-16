import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardInfo from '../CardInfo';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function CardInfoList(props) {
  const { classes } = props;

  let content = (
    <div>
      <h4 className="CardInfo__title">Cidade histórica de Paraty</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
        assumenda vero atque, commodi, earum a vel, quo dolore vitae illum
        officiis cumque! Quisquam sed accusamus quae ad? Quam, fuga autem.
      </p>
      <Button variant="outlined" className={classes.button}>
        Leia mais
      </Button>
    </div>
  );

  return (
    <div className="CardInfoList">
      <Grid container spacing={24} className="no-margin">
        <Grid item xs={6} md={4}>
          <CardInfo>{content}</CardInfo>
        </Grid>
        <Grid item xs={6} md={4}>
          <CardInfo>{content}</CardInfo>
        </Grid>
        <Grid item xs={6} md={4}>
          <CardInfo>{content}</CardInfo>
        </Grid>
      </Grid>
    </div>
  );
}

CardInfoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardInfoList);
