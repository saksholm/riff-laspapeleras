import React from 'react';
import Bin from './bin';

export default class BinList extends React.Component {
    constructor(props) {
        super(props);
      console.log("this.props.bins", this.props.bins);

    }
    render() {
        console.log("on render", this.props.bins);
        return (<div className="binList">
            <h1>BINS</h1>
            <ul>
                {this.props.bins.map((bin) => (
                    <li key={bin.id}>
                        <Bin data={bin}/>
                    </li>
                ))}
            </ul>
        </div>)
    }
}