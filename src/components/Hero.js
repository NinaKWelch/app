import React from 'react'
import umbrellas from '../media/umbrellas.jpg'

const Hero = () => {
  return (
    <div>
      <img
        src={umbrellas}
        alt="umbrellas"
        style={{ width: '100%', height: 'auto ' }}
      />
    </div>
  )
}

export default Hero
