import React, { Component } from 'react';
import './App.css';
import BinList from './bins/BinList';
import Map from './map/Map';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BinList></BinList>
        <Map></Map>
      </div>
    );
  }
}

export default App;
