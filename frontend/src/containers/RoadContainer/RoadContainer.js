import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FullContainer from '../FullContainer';
import Logo from '../../components/Logo';
import BoxNumbers from '../../components/BoxNumbers';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex',
  },
});

function RoadContainer() {
  return (
    <FullContainer>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Logo />
        </Grid>
        <Grid item xs={6}>
          <h2>Já estamos na estrada</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, id
            officia facilis modi doloremque minus. Possimus iusto maxime iure
            provident distinctio quidem animi laboriosam harum, necessitatibus
            architecto. Corrupti, animi nulla?
          </p>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <BoxNumbers numbers={'53'} info={'Cidades circuladas'} />
            </Grid>
            <Grid item xs={4}>
              <BoxNumbers numbers={'3450'} info={'KM rodados'} />
            </Grid>
            <Grid item xs={4}>
              <BoxNumbers numbers={'1253'} info={'Pessoas conectadas'} />
            </Grid>
          </Grid>
          <h3>Lorem ipsum</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            libero vel sed. Nostrum, voluptates ratione facilis nulla et quo
            unde eligendi dolorem repellendus, voluptatem alias? Odio molestiae
            perspiciatis culpa eius.
          </p>
        </Grid>
      </Grid>
    </FullContainer>
  );
}

RoadContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoadContainer);
