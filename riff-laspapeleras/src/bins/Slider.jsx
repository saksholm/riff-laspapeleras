import React from 'react';
import { changeFormula } from '../actions';
import {connect} from 'react-redux';

export class Slider extends React.Component {
    onChange = (event) => {
        console.log('___-> this.props.parameter', this.props.parameter);
        this.props.dispatch(changeFormula(this.props.id, this.props.parameter, event.target.value));
    }

    render() {
        return (
            <div className="slider">
                <h3 className='parameter'>Parameter: a</h3>
                <input type="range" {...this.props} onChange={this.onChange} data-parameter={this.props.parameter}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bins: state.bins,
    }
};

export default connect(mapStateToProps)(Slider);

