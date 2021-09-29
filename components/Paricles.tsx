import ParticlesJS from 'react-particles-js';
import { RecursivePartial, IOptions } from 'tsparticles';
import ParticlesParams from '../particles.json';

const Particles: React.FC = () => {
  return (
    <ParticlesJS
      className="absolute w-full h-full"
      params={ParticlesParams as RecursivePartial<IOptions>}
    />
  );
};

export { Particles };
