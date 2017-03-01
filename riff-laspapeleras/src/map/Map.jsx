import React from 'react';
import Map, {Marker, InfoWindow} from 'google-maps-react';

export default class MapWrapper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selelectedPlace: {
        name: 'foobar'
      }
    }
  }
  onMarkerClick = () => {

  };

  selectedPlace = () => {

  };

  render() {
    return (<div className="map">
      <Map google={window.google} zoom={17} initialCenter={{lat: 28.149674, lng: -15.430141}} >

        <Marker name={'Current location'} position={{lat: 28.140, lng: -15.431}} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>some name</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>)
  }
}