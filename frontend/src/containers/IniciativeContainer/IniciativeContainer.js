import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FullContainer from '../FullContainer';
import Logo from '../../components/Logo';
import CardInfo from '../../components/CardInfo';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex',
  },
});

function IniciativeContainer(props) {
  const { classes } = props;
  return (
    <FullContainer extraClass="LogBook">
      <Grid container spacing={24}>
        <Grid item xs={12} md={6} lg={4}>
          <CardInfo image={"/static/images/image6.png"}>
            <h3>Ninja Hacker Space</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </CardInfo>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardInfo image={"/static/images/image5.png"}>
            <h3>Design Ativista</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </CardInfo>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardInfo image={"/static/images/image7.png"}>
            <h3>Xepa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </CardInfo>
        </Grid>
      </Grid>
    </FullContainer>
  );
}

IniciativeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IniciativeContainer);
