import React from 'react';
import styled from 'styled-components';

export const BinIndicator = styled.div`
  display: inline-block;
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 10px;
  background: red;
`;

const FullBins = ({ fullBins }) => {

  let tempFullBins = fullBins <= 3 ? fullBins : 3;

  const arr = [];
  for (let i=1; i<=tempFullBins; i++) { arr.push(i) }

  return (
    <div className='full-bins'>
      {arr.map( (item, index) => <BinIndicator key={index}/> )}
    </div>
  )
};

export default FullBins
