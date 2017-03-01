import React from 'react';
import {BarIndicator, Indicator} from './BarIndicator'

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
            <BarIndicator>
              <Indicator width={data.percentFull}/>
            </BarIndicator>
          </div>
        </div>)
    }
}
