import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from './config/particle-config.js';

export default function ParticleBackground() {
  return (
    <div className="particles">
      <Particles params={ParticleConfig}></Particles>
    </div>
  )
}
