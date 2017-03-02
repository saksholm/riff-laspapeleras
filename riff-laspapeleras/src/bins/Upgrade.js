import React from 'react';

const Upgrade = ({ onUpgrade }) => (
  <div className='buy-upgrade'>
    <h3>Upgrade bin</h3>
    <button className='btn' onClick={onUpgrade}>Buy</button>
  </div>
);

export default Upgrade;
