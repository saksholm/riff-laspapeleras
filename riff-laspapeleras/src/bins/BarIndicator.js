import React from 'react';
import styled from 'styled-components';

export const BarIndicator = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  background: #eee;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const Indicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${ props => props.width }%;
  height: 30px;
  border-radius: 15px;
  background: hsl(${ props => 120-props.width*120/100}, 100%, 50%);
`;

export const  IndicatorHeader = styled.h3`
  color: #666;
  margin-bottom: 5px;
`
