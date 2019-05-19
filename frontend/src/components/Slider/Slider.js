import React from 'react';
import Slider from 'react-slick';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
  },
});

class SimpleSlider extends React.Component {
  render() {
    const { items, classes } = this.props;

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="Slider">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="slider-content">{item}</div>
          ))}
        </Slider>
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array,
};

export default withStyles(styles)(SimpleSlider);
