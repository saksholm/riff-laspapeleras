import React from 'react';
import {BarIndicator, Indicator, IndicatorHeader } from './BarIndicator';
import Sliders from './Sliders'

export default class Bin extends React.Component {
    render() {
        const { data } = this.props;
        return (
        <div className="bin">
          <div className='bin-image-wrapper'>
            <img src={data.imgUrl} alt=""/>
          </div>
          <div className='bin-info'>
            <h1>{data.name}</h1>
            <IndicatorHeader>{`${data.percentFull}% full`}</IndicatorHeader>
            <BarIndicator>
              <Indicator width={data.percentFull}/>
            </BarIndicator>
            <Sliders data={this.props}/>
          </div>
        </div>)
    }
}
