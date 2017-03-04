import React from 'react';

export default class Timer extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props.startTime);
    if(this.props.startTime > 0) {
      setInterval(function()  {
        this.forceUpdate();
      },500);
    }

  }


  render() {
    const date = new Date();
    const timestamp = Math.floor(date.getTime() / 1000);
    let diff = (timestamp - this.props.startTime);
    if(typeof this.props.startTime === 'undefined') { diff = 0; }

    return (<div className='timer'>Timer: {diff}</div>)

  }

};