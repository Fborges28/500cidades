import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import VideoPlayer from '../../components/VideoPlayer';
import Logo from '../../components/Logo';
import { unstable_Box as Box } from '@material-ui/core/Box';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function MainHeader(props) {
  const { classes, width } = props;
  return (
    <div className="main-header">
      <Grid container spacing={24}>
        <Grid item md={3}>
          <h1>Caravana da cidadania, coluna Prestes e 500 cidades</h1>
          <p className={classes.introText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            eligendi soluta enim, ipsa eaque similique a voluptatum tempora
            neque fuga nobis repellat, error reiciendis molestiae animi id
            quidem quia esse.
          </p>
        </Grid>
        <Grid item id="main-header-video-container" xs={12} md={9}>
          <VideoPlayer
            url={'https://www.youtube.com/watch?v=oUFJJNQGwhk'}
            height={width != 'xs' && width != 'sm' ? '600px' : '350px'}
          />
        </Grid>
        <Grid item md={6} id="main-header-logo-container">
          <Logo />
        </Grid>
        <Grid item md={4} id="main-header-logo-description">
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
        <Grid item md={6} />
        <Grid item md={6}>
          <div id="main-header-images-block">
            <img
              src="/static/images/image1.png"
              alt="Imagem 1"
              id="main-header-image-1"
            />
            <img
              src="/static/images/image2.png"
              alt="Imagem 2"
              id="main-header-image-2"
            />
            <img
              src="/static/images/image3.png"
              alt="Imagem 3"
              id="main-header-image-3"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withWidth(),
)(MainHeader);
