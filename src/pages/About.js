import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";

import tanuja from "../../public/images/bgcode.jpg";
import reshma from "../../public/images/engineering.png";
import keerthika from "../../public/images/HPImage.png";
import primus from "../../public/images/logo.png";

import * as THREE from "three";

function Box({
  onClick,
  isCubeRotated,
  setIsCubeRotated,
  isClicked,
  setIsClicked,
  position,
  image,
}) {
  const boxRef = useRef();

  useFrame(() => {
    if (boxRef.current && !isClicked) {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.01;
    }
    if (boxRef.current && isClicked) {
      boxRef.current.rotation.x = 0;
      boxRef.current.rotation.y = 0;
      boxRef.current.rotation.z = 0;
    }
    if (boxRef.current && isCubeRotated) {
      setIsClicked(true);
      setIsCubeRotated(false);
    }
  });

  const texture = useLoader(THREE.TextureLoader, image);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <mesh ref={boxRef} onClick={handleClick} position={position}>
      <boxGeometry args={[1, 1, 1]} />

      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function About() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isCubeRotated, setIsCubeRotated] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectCubeInfo, setSelectedCubeInfo] = useState(false);

  const handleClick = (info) => {
    if (isInfoVisible) {
      setIsCubeRotated(false);
      setIsClicked(false);
      setIsInfoVisible(false);
    } else {
      setIsCubeRotated(true);
      setIsClicked(true);
      setSelectedCubeInfo(info);
      setIsInfoVisible(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.tagName !== "CANVAS") {
        setIsCubeRotated(false);
        setIsClicked(false);
        setIsInfoVisible(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const cubeData = [
    {
      image: tanuja.src,
      info: { name: "tanuja", age: "25", occupation: "Web Developer" },
      position: [
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
      ],
    },
    {
      image: reshma.src,
      info: { name: "reshma", age: "30", occupation: "Graphic Designer" },
      position: [
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
      ],
    },

    {
      image: keerthika.src,
      info: { name: "Keerthika", age: "30", occupation: "Graphic Designer" },
      position: [
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
      ],
    },

    {
      image: primus.src,
      info: { name: "Primus", age: "30", occupation: "Graphic Designer" },
      position: [
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
      ],
    },
  ];

  const positions = [
    [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
    [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
    [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
    [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
  ];

  return (
    <div className="flex justify-center items-center mt-0">
      <div className="relative flex flex-row">
        <Canvas style={{ width: "100vw", height: "100vh" }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {cubeData.map((cube, i) => (
            <Box
              key={i}
              onClick={() => handleClick(cube.info)}
              isCubeRotated={isCubeRotated}
              setIsCubeRotated={setIsCubeRotated}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              position={cube.position}
              image={cube.image}
              info={cube.info}
            />
          ))}
          <OrbitControls />
        </Canvas>
        {isInfoVisible && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75 z-10">
            <div className="bg-pink-900 text-white p-4 rounded-md">
              <h2 className="text-2xl font-bold mb-4">
                {selectCubeInfo.name}
              </h2>
              <p className="mb-2">Age: {selectCubeInfo.age}</p>
              <p>Occupation: {selectCubeInfo.occupation}</p>
            </div>
          </div>  
        )}
      </div>
    </div>
  );
}

export default About;