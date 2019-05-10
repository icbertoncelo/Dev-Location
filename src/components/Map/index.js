import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';

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
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;

    showModal({ latitude, longitude });
  };

  render() {
    const { viewport: viewportState } = this.state;
    const { developers } = this.props;
    return (
      <ReactMapGL
        {...viewportState}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {developers.data.map(developer => (
          <Marker
            latitude={developer.cordinates.latitude}
            longitude={developer.cordinates.longitude}
            key={developer.id}
          >
            <Image
              src={developer.avatar_url}
              alt={`${developer.name} Avatar`}
            />
          </Marker>
        ))}
      </ReactMapGL>
    );
  }
}

Map.propTypes = {
  showModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
