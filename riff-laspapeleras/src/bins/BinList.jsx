import React from 'react';
import Bin from './bin';

export default class BinList extends React.Component {

    render() {
        return (<div className="binList">
            <h1>BINS</h1>
            <ul>
                {this.props.bins.map((bin, index) => (
                    <li key={index}>
                        <Bin data={bin}/>
                    </li>
                ))}
            </ul>
        </div>)
    }
}