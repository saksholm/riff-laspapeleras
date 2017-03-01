import React from 'react';
import Map, {Marker, InfoWindow} from 'google-maps-react';

import {emptyBin} from '../actions';
import {connect} from 'react-redux';



export class MapWrapper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selelectedPlace: {
        name: 'foobar'
      }
    };

  }
  onMarkerClick = (evt) => {
    this.props.dispatch(emptyBin(evt.key));
    console.log("wattaaaa faaaak", evt.name);
  };

  selectedPlace = () => {

  };


  markerWrapper = () => {
    let arr = [];

    this.props.bins.map((bin) => {
      return arr.push(<Marker key={bin.id} onClick={this.onMarkerClick} name={bin.name} position={{lat: bin.location.lat, lng: bin.location.lng }} />);
    });

      return arr;
  };

  render() {
    return (<div className="map">
      <Map google={window.google} zoom={17} initialCenter={{lat: 28.149344, lng: -15.429630}} >

        <Marker onClick={this.onMarkerClick} name={'Current location'} position={{lat: 28.149674, lng: -15.430141}} />
        {this.markerWrapper()}
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>some name</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    bins: state.bins,
  }
};

export default connect(mapStateToProps)(MapWrapper);