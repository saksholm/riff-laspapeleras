import React from 'react';
import Bin from './bin';
import Wallet from '../wallet/Wallet'
import {connect} from 'react-redux';

class BinList extends React.Component {
  render() {
    return (
      <div className="binList">
        <Wallet balance={this.props.balance} />
        {this.props.bins.map((bin) => (
          <Bin data={bin} key={bin.id} formula={bin.formula} {...this.props}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bins: state.bins,
    balance: state.balance,
    upgradePrice: state.upgradePrice
  }
};

export default connect(mapStateToProps)(BinList);
