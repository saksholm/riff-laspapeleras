import React from 'react';
import Slider from './Slider'

const sliders = [
  {
    id: 1,
    min: 0,
    max: 10,
    value: 2,
  },
  {
    id: 2,
    min: 0,
    max: 3,
    value: 2,
  },
]

const Sliders = (data) => (
  <div className="bin-sliders">
    { sliders.map( (slider) => (
      <div key={slider.id}>
        <Slider
          id    = { slider.id }
          min   = { slider.min }
          max   = { slider.max }
          value = { slider.value }
        />
      </div>
    ))}
  </div>
)

export default Sliders
