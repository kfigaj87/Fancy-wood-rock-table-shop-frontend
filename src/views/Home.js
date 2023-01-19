import { PresentationControls, Stage } from "@react-three/drei";

import Table from "../components/Table";

import { Canvas } from "@react-three/fiber";

import Configurator from "../components/Configurator";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Canvas>
        <color attach="background" args={["#375580"]} />

        <PresentationControls
          speed={1.5}
          global
          polar={[-0.4, Math.PI / 4]}
          rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
          <Stage environment="sunset" intensity={0.1} castShadow={false}>
            <Table />
          </Stage>
        </PresentationControls>
      </Canvas>
      <Configurator />
    </div>
  );
};

export default Home;
