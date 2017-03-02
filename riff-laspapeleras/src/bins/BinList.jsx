import React from 'react';
import Bin from './bin';

export default class BinList extends React.Component {
  render() {
    return (
      <div className="binList">
        {this.props.bins.map((bin) => (
          <Bin data={bin} key={bin.id} formula={bin.formula}/>
        ))}
      </div>
    )
  }
}
