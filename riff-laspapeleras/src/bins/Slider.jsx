import React from 'react';

const Slider = (props) => (
  <div className="slider">
    <h3 className='parameter'>Parameter: a</h3>
    <input type="range" {...props}/>
  </div>
);

export default Slider
