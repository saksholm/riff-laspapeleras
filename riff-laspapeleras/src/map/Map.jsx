import React from 'react';
import Map, {Marker, InfoWindow} from 'google-maps-react';

import {emptyBin, updatePercent, updateFullBins} from '../actions';
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
        if(bin.percentFull < 100 && bin.displayed) {
          const newPercent = this.formula(bin.percentFull, bin.formula);
          this.props.dispatch(updatePercent(bin.id, newPercent));
        }
      });

      this.countFullBins();
    },1000);

    // BIN ADDING INTERVAL
    setInterval(() => {
      let displayedBins = this.props.bins.filter((bin) => {
        return bin.displayed;
      });
      const maxBinsDisplayed = 3;
      if (displayedBins.length >= maxBinsDisplayed) {
        this.props.bins[displayedBins.length].displayed = true;
      }
    }, 5000);
  }
  
  

  formula = (value, formula) => {
    let change = 5 +  Math.pow(formula[Object.keys(formula)[0]],2) + Math.pow(formula[Object.keys(formula)[1]],3) - (formula[Object.keys(formula)[2]])
        ;
    if (change > 7) {
      change = 7;
    }
    if (change < 2) {
      change = 2;
    }
    const randomness = Math.random() > 0.5 ? 1: 0;
    let newValue = value + change + randomness;
    if (newValue > 100) {
      newValue = 100;
    }
    if (newValue < 1) {
      newValue = 1;
    }
    return newValue;
  };

  countFullBins = () => {
    const fullBins = this.props.bins.filter((bin) => {
      if(bin.percentFull === 100) return bin;
    }).length;

    if(this.props.fullBins !== fullBins) {
      this.props.dispatch(updateFullBins(fullBins));
    }
  };

  onMarkerClick = (id) => {
    this.props.dispatch(emptyBin(id));
  };

  selectedPlace = () => {

  };


  markerWrapper = () => {
    let arr = [];
    const displayedBins = this.props.bins.filter((bin) => {
      return bin.displayed;
    });
    displayedBins.map((bin) => {
      return arr.push(<Marker key={bin.id} onClick={() => this.onMarkerClick(bin.id)} name={bin.name} position={{lat: bin.location.lat, lng: bin.location.lng }} />);
    });

      return arr;
  };


  render() {

    return (<div className="map">
      <Map google={window.google} zoom={18} minZoom={18} maxZoom={18} initialCenter={{lat: 28.149344, lng: -15.429630}} zoomControl={false} disableDoubleClickZoom={true} >
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
    fullBins: state.fullBins,
  }
};

export default connect(mapStateToProps)(MapWrapper);
