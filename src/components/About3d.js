import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Html } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function BoxWrapper(props) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const speed = 0.5; // adjust the speed of rotation

  useFrame((_state, delta) => {
    if (props.axis === "x") {
      ref.current.rotation.x += delta * speed;
      ref.current.position.y = Math.cos(ref.current.rotation.x) * props.radius; // move along X-axis
      ref.current.position.z = Math.sin(ref.current.rotation.x) * props.radius;
    } else if (props.axis === "y") {
      ref.current.rotation.y += delta * speed;
      ref.current.position.x = Math.cos(ref.current.rotation.y) * props.radius; // move along X-axis
      ref.current.position.z = Math.sin(ref.current.rotation.y) * props.radius;
    } else if (props.axis === "z") {
      ref.current.rotation.y += delta * speed;
      ref.current.position.x = Math.sin(ref.current.rotation.y) * props.radius;
      ref.current.position.y = 0;
      ref.current.position.z = Math.cos(ref.current.rotation.y) * props.radius;
    } else if (props.axis === "k") {
      ref.current.rotation.x += delta * speed;
      ref.current.position.x = 0;
      ref.current.position.y = Math.sin(ref.current.rotation.x) * props.radius;
      ref.current.position.z = Math.cos(ref.current.rotation.x) * props.radius;
    }
  });

  // move along Z-axis

  const texture1 = useTexture("/images/prime.jpeg");
  const texture2 = useTexture("/images/kety.jpeg");
  const texture3 = useTexture("/images/thanu.jpeg");
  const texture4 = useTexture("images/resh.jpeg");

  let materialProps;
  if (props.name === "prime") {
    materialProps = { map: texture1 };
  } else if (props.name === "kety") {
    materialProps = { map: texture2 };
  } else if (props.name === "thanu") {
    materialProps = { map: texture3 };
  } else {
    materialProps = { map: texture4 };
  }

  return (
    <Box
      {...props}
      ref={ref}
      args={[2, 2, 2]} // Update the size of the box here
      onClick={(_event) => console.log("clicked")}
      onPointerOver={(_event) => {
        setHover(true);
        setHoverText(props.hoverText); // Set the hover text to the prop passed in
      }}
      onPointerOut={(_event) => {
        setHover(false);
        setHoverText("");
      }}
    >
      <meshStandardMaterial {...materialProps} />
      {hovered && (
        <Html position={[0, 0, 1]}>
          <div
            className="text-white bg-pink-900 bg-opacity-75 p-4 rounded-md w-96"
          >
            {hoverText}
          </div>
        </Html>
      )}
    </Box>
  );
}

function Scene() {
  const colorMap = useTexture("/images/earth.jpg");

  return (
    <group>
      <ambientLight intensity={0.9} />
      <directionalLight color="#ffffff" intensity={1} position={[0, 5, 0]} />
      <mesh onClick={() => (window.location.href = "/AboutPage")}>
        <Sphere position={[0, 0, 0]} args={[5, 500, 500]}>
          <meshStandardMaterial map={colorMap} />
        </Sphere>
      </mesh>

      <BoxWrapper
        position={[0, 0, 0]}
        radius={10}
        size={100}
        name="prime"
        axis="x"
        hoverText="Hi, I am Primus - a social butterfly 🦋"
      />
      <BoxWrapper
        position={[6, 0, 0]}
        radius={10}
        size={100}
        name="kety"
        axis="y"
        hoverText="Hi, This is Keerthika - an inquisitive learner 👩🏽‍🎓"
      />
      <BoxWrapper
        position={[0, 0, 0]}
        radius={10}
        size={100}
        name="thanu"
        axis="z"
        hoverText="Hey, This is Tanuja - a BTS addict 📣"
      />
      <BoxWrapper
        position={[0, 0, 0]}
        radius={10}
        size={100}
        axis="k"
        hoverText="Hey, I am Reshma - a globe trotter 🌏"
      />
    </group>
  );
}

function App() {
  const [page, setPage] = useState("scene");

  return (
    <div>
      <nav style={{ padding: "20px", background: "#333", textAlign: "center" }}>
        <button
          style={{ margin: "10px", color: "white" }}
          onClick={() => setPage("scene")}
        >
          Scene
        </button>
        <button
          style={{ margin: "10px", color: "white" }}
          onClick={() => setPage("about")}
        >
          About
        </button>
      </nav>
      <Canvas
        camera={{ position: [0, 0, 30] }}
        className="bg-black"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {page === "scene" ? <Scene /> : <About />}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
