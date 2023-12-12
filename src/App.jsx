import { Canvas } from '@react-three/fiber';
import {Experience} from './Experience';
import './App.css';

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 35 }}>
      <color attach="background" args={['#ececec']} />

      <Experience />
    </Canvas>
  );
}

export default App;
