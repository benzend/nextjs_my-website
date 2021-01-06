import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Canvas, useFrame } from "react-three-fiber";
import { useRef, useState } from "react";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh: any = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Benjamin Scott | A React.js Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>

      <main className={styles.main}>
        <h1 className={styles.title}>Benjamin Scott</h1>
        <p className={styles.description}>A React.js Web Developer</p>
      </main>
    </div>
  );
}
