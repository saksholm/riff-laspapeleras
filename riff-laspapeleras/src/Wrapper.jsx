import React from 'react';
import BinList from './bins/BinList';
import Map from './map/Map';

import {connect} from 'react-redux';


const Wrapper = (props) => {
  return (
      <div className="wrapper">
        <BinList  />
        <Map bins={props.bins} />
      </div>)
};

export default Wrapper;
