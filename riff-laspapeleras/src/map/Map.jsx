import React from 'react';
import Map, {Marker, InfoWindow} from 'google-maps-react';

import {emptyBin, updatePercent} from '../actions';
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

  componentDidMount() {

    // MAIN INTERVAL
    setInterval(() => {
      this.props.bins.map((bin) => {
        if(bin.percentFull < 100) {
          const newPercent = this.formula(bin.percentFull,5);
          console.log(bin.percentFull, newPercent);
          this.props.dispatch(updatePercent(bin.id, newPercent));
        }
      });
    },1000);
  }

  formula = (base, a) => {
    const value = base + a;
    return (value >= 100 ? 100 : value);
  };


  onMarkerClick = (evt) => {
    this.props.dispatch(emptyBin(evt));
    console.log("You clicked bin id/name", evt);
  };

  selectedPlace = () => {

  };


  markerWrapper = () => {
    let arr = [];

    this.props.bins.map((bin) => {
      return arr.push(<Marker key={bin.id} onClick={() => this.onMarkerClick(bin.id)} name={bin.name} position={{lat: bin.location.lat, lng: bin.location.lng }} />);
    });

      return arr;
  };


  render() {

    return (<div className="map">
      <Map google={window.google} zoom={17} minZoom={17} maxZoom={17} initialCenter={{lat: 28.149344, lng: -15.429630}} zoomControl={false} disableDoubleClickZoom={true} >
        {this.markerWrapper()}
        {/*
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>some name</h1>
          </div>
        </InfoWindow>
         */}
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