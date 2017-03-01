import React from 'react';
import Map, {Marker, InfoWindow} from 'google-maps-react';

export default class MapWrapper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selelectedPlace: {
        name: 'foobar'
      }
    };


    console.log(this.props);

    console.log(<Marker name={'you are stupid marker'}/>);

  }
  onMarkerClick = (evt) => {
    console.log("wattaaaa faaaak", evt.name);
  };

  selectedPlace = () => {

  };


  markerWrapper = () => {
    let arr = [];

    this.props.bins.map((bin) => {
      arr.push(<Marker onClick={this.onMarkerClick} name={bin.name} position={{lat: bin.location.lat, lng: bin.location.lng }} />);
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