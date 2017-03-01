import React from 'react';

export default class Bin extends React.Component {

    render() {
        const data=this.props.data;
        return (
        <div className="bin">
            <h1>{data.name}</h1>
            <span>THIS BIN IS {data.percentFull} % FULL</span>
        </div>)
    }
}