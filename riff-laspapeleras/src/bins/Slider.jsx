import React from 'react';
import { changeFormula } from '../actions';
import {connect} from 'react-redux';

export class Slider extends React.Component {
    onChange = (event) => {
        this.props.dispatch(changeFormula(this.props.id, this.props.parameter, event.target.value));
    }

    render() {

      return (
        <div className="slider">
            <input type="range"
                   min={this.props.min}
                   max={this.props.max}
                   value={this.props.value}
                   onChange={this.onChange} />
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
