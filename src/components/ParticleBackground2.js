import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from './config/particle-config.js';

export default function ParticleBackground2() {
  return (
    <div className="particles2">
      <Particles params={ParticleConfig}></Particles>
    </div>
  )
}
