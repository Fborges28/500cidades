import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForward';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function CardInfo(props) {
  const { classes, children, image } = props;
  return (
    <div className="CardInfo">
      <Grid container spacing={24} className="no-margin">
        <Grid item xs={12} className="CardInfo__container__top no-padding">
          <header>
            <img
              className="CardInfo__thumb"
              src={image ? image: "/static/images/image4.png"}
              alt=""
            />
          </header>
        </Grid>
        <Grid item xs={12} className="CardInfo__container__bottom no-padding">
          <footer className="CardInfo__description">{children}</footer>
        </Grid>
      </Grid>
    </div>
  );
}

CardInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardInfo);
