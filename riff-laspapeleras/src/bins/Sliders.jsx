import React from 'react';
import Slider from './Slider'

const Sliders = ({data}) => {
    const parameters = Object.keys(data.data.formula);
    return (
        <div className="bin-sliders">
            { parameters.map( (parameter, index) => (

                    <Slider
                        key={"parameter"+index}
                        {...data}
                        id={data.data.name}
                        parameter={ parameter }
                        min={ -3 }
                        max={ 3 }
                        value={ data.data.formula[parameter]}
                    />

            ))}
        </div>
    )
}

export default Sliders
