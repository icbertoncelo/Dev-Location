import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export default class App extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -21.7545,
      longitude: -41.3244,
      zoom: 10,
    },
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}
