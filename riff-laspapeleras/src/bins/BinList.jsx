import React from 'react';
import Bin from './bin';
import Wallet from '../wallet/Wallet'
import {connect} from 'react-redux';

class BinList extends React.Component {

    filterDisplayedBins() {
        return this.props.bins.filter((bin) => {
            return bin.displayed === true
        })
    }

  render() {
    return (
      <div className="binList">
        <Wallet balance={this.props.balance} fullBins={this.props.fullBins} startTime={this.props.startTime}/>
        {this.filterDisplayedBins().map((bin, index) => {
               return <Bin data={bin} key={"bin"+index} {...this.props}/>
            })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bins: state.bins,
    balance: state.balance,
    upgradePrice: state.upgradePrice,
    fullBins: state.fullBins
  }
};

export default connect(mapStateToProps)(BinList);
