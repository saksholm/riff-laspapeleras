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
      <Map google={window.google} zoom={14} >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>some name</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>)
  }
}