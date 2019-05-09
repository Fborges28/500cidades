import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class VideoPlayer extends Component {
  render() {
    const { url, height } = this.props;
    return (
      <ReactPlayer
        url={url}
        width="100%"
        controls
        height={height ? height : 'auto'}
      />
    );
  }
}

VideoPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string,
  height: PropTypes.string,
};

export default withStyles(styles)(VideoPlayer);
