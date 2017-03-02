import React from 'react';
import Slider from './Slider'

const Sliders = ({data}) => {
    const parameters = Object.keys(data.formula);
    console.log('___-> data', data);
    return (
        <div className="bin-sliders">
            { parameters.map( (parameter) => (
                <div key={parameter}>
                    <Slider
                        id = {data.data.name}
                        parameter = { parameter }
                        min   = { 1 }
                        max   = { 10 }
                        value = { data.formula[parameter] }
                    />
                </div>
            ))}
        </div>
    )
}

export default Sliders
