import React from 'react';
import FullBins from './FullBins'
import GameOver from './GameOver'

const Balance = ({balance}) => <h2>{`PPL coins: ${balance}`}</h2>

const Wallet = ({ balance, fullBins, startTime }) => (
  <div className='wallet'>
    { fullBins < 3
        ? <div>
          <Balance balance={balance}/>
          <FullBins fullBins={fullBins}/>
        </div>
      : <GameOver/>
    }
  </div>
);

export default Wallet;
