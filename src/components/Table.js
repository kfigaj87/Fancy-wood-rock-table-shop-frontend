import { useGLTF, useTexture } from "@react-three/drei";

import * as THREE from "three";
import { useCustomization } from "../contexts/Customization";

function Table(props) {
  const { nodes, materials } = useGLTF("./models/table.gltf");

  const { material, objects, tableColor, objectColor } = useCustomization();

  const woodTextureProps = useTexture({
    normalMap: "./textures/wood/Wood_Floor_011_normal.jpg",
    roughnessMap: "./textures/wood/Wood_Floor_011_roughness.jpg",
    aoMap: "./textures/wood/Wood_Floor_011_ambientOcclusion.jpg",
  });

  const rockTextureProps = useTexture({
    normalMap: "./textures/rock/Rock_Cliff_003_normal.jpg",
    roughnessMap: "./textures/rock/Rock_Cliff_003_roughness.jpg",
    aoMap: "./textures/rock/Rock_Cliff_003_ambientOcclusion.jpg",
  });

  const objectTextureProps = useTexture({
    normalMap: "./textures/wall/Substance_graph_Normal.jpg",
    roughnessMap: "./textures/wall/Substance_graph_Roughness.jpg",
    aoMap: "./textures/wall/Substance_graph_AmbientOcclusion.jpg",
  });

  woodTextureProps.normalMap.repeat.set(3, 3);
  woodTextureProps.roughnessMap.repeat.set(3, 3);
  woodTextureProps.aoMap.repeat.set(3, 3);

  woodTextureProps.normalMap.wrapS = woodTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  woodTextureProps.roughnessMap.wrapS = woodTextureProps.roughnessMap.wrapT =
    THREE.MirroredRepeatWrapping;
  woodTextureProps.aoMap.wrapS = woodTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  rockTextureProps.normalMap.repeat.set(3, 3);
  rockTextureProps.roughnessMap.repeat.set(3, 3);
  rockTextureProps.aoMap.repeat.set(3, 3);

  rockTextureProps.normalMap.wrapS = rockTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  rockTextureProps.roughnessMap.wrapS = rockTextureProps.roughnessMap.wrapT =
    THREE.RepeatWrapping;
  rockTextureProps.aoMap.wrapS = rockTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  objectTextureProps.normalMap.repeat.set(3, 3);
  objectTextureProps.roughnessMap.repeat.set(3, 3);
  objectTextureProps.aoMap.repeat.set(3, 3);

  objectTextureProps.normalMap.wrapS = objectTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  objectTextureProps.roughnessMap.wrapS =
    objectTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  objectTextureProps.aoMap.wrapS = objectTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.table.geometry}
        material={materials.Material}
        position={[0, 1.6, 0.01]}
        rotation={[0, 0, -1.57]}
        scale={[0.15, 1.27, 1.28]}
        castShadow
      >
        <meshStandardMaterial
          {...(material === "wood" ? woodTextureProps : rockTextureProps)}
          color={tableColor.color}
        />
      </mesh>
      <mesh
        geometry={nodes.ball.geometry}
        material={materials["Materiał.001"]}
        position={[0, 2.08, 0]}
        scale={[0.7, 0.7, 0.7]}
        visible={objects === "Ball"}
        castShadow
      >
        <meshStandardMaterial
          {...objectTextureProps}
          color={objectColor.color}
        />
      </mesh>
      <mesh
        geometry={nodes.cube.geometry}
        material={materials["Materiał.002"]}
        position={[-0.01, 2, -0.02]}
        visible={objects === "Cube"}
        castShadow
      >
        <meshStandardMaterial
          {...objectTextureProps}
          color={objectColor.color}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/table.gltf");

export default Table;
