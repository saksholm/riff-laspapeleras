import React from 'react';

const Balance = ({balance}) => <h2>{`PPL coins: ${balance}`}</h2>

const Wallet = ({ balance }) => (
  <div className='wallet'>
    <Balance balance={balance}/>
  </div>
);

export default Wallet;
