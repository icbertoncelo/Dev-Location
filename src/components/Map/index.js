import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DeveloperActions } from '../../store/ducks/developers';

import 'mapbox-gl/dist/mapbox-gl.css';
import { Image } from './styles';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -21.7545,
      longitude: -41.3244,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    // const [longitude, latitude] = e.lngLat;

    this.props.addDeveloperRequest();
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={-21.7545}
          longitude={-41.3244}
          onClick={this.handleMapClick}
          captureClick
        >
          <Image
            src="https://avatars1.githubusercontent.com/u/15328398?v=4"
            alt=""
          />
        </Marker>
      </ReactMapGL>
    );
  }
}

Map.propTypes = {
  addDeveloperRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
