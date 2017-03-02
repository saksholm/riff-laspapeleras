import React from 'react';
import {BarIndicator, Indicator, IndicatorHeader } from './BarIndicator'
import Slider from './Slider'

export default class Bin extends React.Component {

    render() {
        const { data } = this.props;
        const style = {
          width: `${data.percentFull}%`
        }
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
            <div className="bin-sliders">
              <Slider
                min="0"
                max="10"
                value="3"
                id="1"
              />
            </div>
          </div>



        </div>)
    }
}
