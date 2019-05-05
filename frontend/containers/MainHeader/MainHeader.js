import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VideoPlayer from '../../components/VideoPlayer';
import Logo from '../../components/Logo';
import { unstable_Box as Box } from '@material-ui/core/Box';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function MainHeader(props) {
  const { classes } = props;
  return (
    <div className="main-header">
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <h1>Caravana da cidadania, coluna Prestes e 500 cidades</h1>
          <p className={classes.introText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            eligendi soluta enim, ipsa eaque similique a voluptatum tempora
            neque fuga nobis repellat, error reiciendis molestiae animi id
            quidem quia esse.
          </p>
        </Grid>
        <Grid item xs={9} id="main-header-video-container">
          <VideoPlayer
            url={'https://www.youtube.com/watch?v=oUFJJNQGwhk'}
            height="650px"
          />
        </Grid>
        <Grid item xs={6} id="main-header-logo-container">
          <Logo />
        </Grid>
        <Grid item xs={4} id="main-header-logo-description">
          <h2>Lorem ipsum</h2>
          <p className="highlight-box">
            <span className="highlight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              eligendi soluta enim, ipsa eaque similique a voluptatum tempora
              neque fuga nobis repellat, error reiciendis molestiae animi id
              quidem quia esse.
            </span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainHeader);
