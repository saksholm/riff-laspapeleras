import React from 'react';
import Slider from './Slider'

const Sliders = ({data}) => {
    const parameters = Object.keys(data.data.formula);
    return (
        <div className="bin-sliders">
            { parameters.map( (parameter) => (
                <div key={parameter}>
                    <Slider
                        {...data}
                        id={data.data.name}
                        parameter={ parameter }
                        min={ 1 }
                        max={ 10 }
                        value={ data.data.formula[parameter]}
                    />
                </div>
            ))}
        </div>
    )
}

export default Sliders
