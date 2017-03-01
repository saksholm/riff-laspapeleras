import React from 'react';
import BinList from './bins/BinList';
import Map from './map/Map';

import {connect} from 'react-redux';


const Wrapper = (props) => {
  return (
      <div className="wrapper">
        <BinList bins={props.bins}></BinList>
        <Map></Map>
      </div>)
};

const mapStateToProps = (state) => {
  return {
    bins: state.bins,
  }
};

export default connect(mapStateToProps)(Wrapper);