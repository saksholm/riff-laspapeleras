import React from 'react';
import {BarIndicator, Indicator, IndicatorHeader } from './BarIndicator'
import Slider from './Slider'
import Sliders from './Sliders'
import Upgrade from './Upgrade'
import { upgradeBin } from '../actions'

class Bin extends React.Component {
    onUpgrade = () => {
      this.props.dispatch( upgradeBin( this.props.bin.id, this.props.upgradePrice ))
    }

    render() {
        const { bin } = this.props;
        const style = {
          width: `${bin.percentFull}%`
        }
        return (
        <div className="bin">
          <div className='image-indicator'>
            <div className='bin-image-wrapper'>
              <img src={bin.imgUrl} alt=""/>
            </div>
            <div className='bin-info'>
              <h1>{bin.name}</h1>
              <IndicatorHeader>{`${bin.percentFull}% full`}</IndicatorHeader>
              <BarIndicator>
                <Indicator width={bin.percentFull}/>
              </BarIndicator>
            </div>
          </div>

          <div className='slider-panel'>
            <Sliders />
            { bin.size < 4 && <Upgrade onUpgrade={ this.onUpgrade }/> }
          </div>

        </div>
      )
    }
}

export default Bin
