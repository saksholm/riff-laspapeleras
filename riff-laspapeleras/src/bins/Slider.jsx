import React from 'react';

const Slider = (props) => (
  <div className="slider">
    <input type="range" {...props}/>
  </div>
);

export default Slider
