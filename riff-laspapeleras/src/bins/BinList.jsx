import React from 'react';
import Bin from './bin';

export default class BinList extends React.Component {
  render() {
    return (
      <div className="binList">
        <h1>BINS</h1>
          {this.props.bins.map((bin) => (
            <Bin data={bin} key={bin.id}/>
          ))}
      </div>
    )
  }
}
