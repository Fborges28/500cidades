import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: -15.7754462,
      lng: -47.7970891,
    },
    zoom: 4,
  };

  render() {
    const { height } = this.props;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: height? height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDV2lc-nswtdlpDyuxjPDomAdyQ2lrNjGk ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
