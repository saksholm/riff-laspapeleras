import React from 'react';

const Slider = (props) => (
  <div className="slider">
    <h3 className='parameter'>A</h3>
    <input type="range" {...props}/>
  </div>
);

export default Slider
