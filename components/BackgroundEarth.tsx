import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { Mesh, TextureLoader } from "three";

function Circle(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>();

  const texture1 = useLoader(TextureLoader, "textures/earth-texture.jpg");

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current)
      mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[5, 5, 5]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereBufferGeometry args={[1, 60, 60]} />
      <meshLambertMaterial map={texture1} />
    </mesh>
  );
}

interface Props {
  yoffset: number;
}

export default function BackgroundEarth({ yoffset }: Props) {
  return (
    <Canvas
      style={{
        zIndex: -20,
        position: "fixed",
        top: (yoffset / 2.4) * -1,
        height: "250vh",
        width: "100vw",
        backgroundColor: "#001",
        transition: "all 3s ease-out",
      }}
    >
      <pointLight position={[-10, -10, -11]} />
      <pointLight position={[15, 15, 10]} />
      <Suspense fallback={null}>
        <Circle position={[0, -1.3, -6]} />
      </Suspense>
    </Canvas>
  );
}
