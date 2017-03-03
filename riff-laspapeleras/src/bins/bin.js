import React from 'react';
import {BarIndicator, Indicator, IndicatorHeader } from './BarIndicator';
import Sliders from './Sliders'
import Upgrade from './Upgrade'
import { upgradeBin } from '../actions'

export default class Bin extends React.Component {

    onUpgrade = () => {
      this.props.dispatch( upgradeBin( this.props.data.id, this.props.upgradePrice ))
    }

    render() {
        const { data } = this.props;
        const disp = data.percentFull; // parseFloat(data.percentFull).toFixed(1);
        return (
        <div className="bin">
          <div className='image-indicator'>
            <div className='bin-image-wrapper'>
              <img src={data.imgUrl} alt=""/>
            </div>
            <div className='bin-info'>
              <h1>{data.name}</h1>
              { data.size < 4 && <Upgrade onUpgrade={ this.onUpgrade }/> }
              <IndicatorHeader>{`${disp}% full`}</IndicatorHeader>
              <BarIndicator>
                <Indicator width={data.percentFull}/>
              </BarIndicator>
            </div>
          </div>

          <div className='slider-panel'>
            <Sliders data={this.props}/>

          </div>
        </div>)
    }
}
