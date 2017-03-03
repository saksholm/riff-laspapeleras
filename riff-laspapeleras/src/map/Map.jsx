import React from 'react';
import Map, {Marker} from 'google-maps-react';
import IntroModal from '../modals/introModal.js'
import EndModal from '../modals/endModal.js';

import {emptyBin, updateCount, updateFullBins, increaseCoins} from '../actions';
import {connect} from 'react-redux';

export class MapWrapper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      introModalOpen: true,
      endModalOpen: false
    };

  }

  startIntervals = () => {
    this.mainInterval = setInterval(() => {
      this.props.bins.map((bin) => {
        let limit = bin.size * 100;

        if(bin.count <= limit && bin.displayed) {
          this.props.dispatch(updateCount(bin.id, this.formula(bin.count, bin.formula, bin.size)));
        }
        return true;
      });

      this.countFullBins();
    },1000);

    this.binAddingInterval = setInterval(() => {
      let displayedBins = this.props.bins.filter((bin) => {
        return bin.displayed;
      });
      if (displayedBins.length <= this.props.maxBinsDisplayed) {
        this.props.bins[displayedBins.length].displayed = true;
      }
    }, 5000);
  }
  
  

  formula = (value, formula, binSize) => {
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
    switch(binSize) {
      default:
      case 1:
        if(newValue > 100) newValue = 100;
        break;
      case 2:
        if(newValue > 200) newValue = 200;
        break;
      case 3:
        if(newValue > 300) newValue = 300;
        break;
      case 4:
        if(newValue > 400) newValue = 400;
        break;
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
    if (fullBins === this.props.maxFullBins) {
      alert('YOU LOST!!!!!')
      clearInterval(this.mainInterval);
      clearInterval(this.binAddingInterval);
    }
  };

  findBinById = (id) => {
    return this.props.bins.filter((bin) => {
      return bin.id === id
    })[0];
  };

  calculateEarnedCoinsBaseOnStatus = (status) => {
    if(status < 30 || status === 100) {
      return 0;
    } else if (status >= 30 && status < 80){
      return 1;
    } else if (status >= 80 && status < 100) {
      return 2;
    }
  };

  onMarkerClick = (id) => {
    const binObj = this.findBinById(id);

    if(binObj.percentFull < 100) {
      const earnedCoins = this.calculateEarnedCoinsBaseOnStatus(binObj.percentFull);
      this.props.dispatch(emptyBin(id));
      this.props.dispatch(increaseCoins(earnedCoins));
    }
  };

  returnBinImage(percentFull) {
    if ( percentFull >= 99) {
      return '/skull.png';
    } else if ( percentFull > 80 ) {
      return '/red_min.png';
    } else if ( percentFull > 50 ) {
      return '/orange_min.png';
    } else {
        return '/green_min.png'
    }
  }

  markerWrapper = () => {
    let arr = [];
    const displayedBins = this.props.bins.filter((bin) => {
      return bin.displayed;
    });

    displayedBins.map((bin,index) => {
      return arr.push(<Marker key={"marker"+index} onClick={() => this.onMarkerClick(bin.id)} name={bin.name} position={{lat: bin.location.lat, lng: bin.location.lng }} icon={this.returnBinImage(bin.percentFull)} />);
    });
      return arr;
  };

  render() {
    return (
        <div className="map">
          <IntroModal onClose={this.startIntervals} dispatch={this.props.dispatch} isOpen={this.props.introModalOpen} />
          <EndModal isOpen={this.props.endModalOpen} dispatch={this.props.dispatch} />
          <Map google={window.google} zoom={17} minZoom={17} maxZoom={17}
               initialCenter={{lat: 28.149344, lng: -15.429630}} zoomControl={false} disableDoubleClickZoom={true}>
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
    maxFullBins: state.maxFullBins,
    maxBinsDisplayed: state.maxBinsDisplayed,
    introModalOpen: state.introModalOpen,
    endModalOpen: state.endModalOpen
  }
};

export default connect(mapStateToProps)(MapWrapper);
