import * as React from 'react'
import * as THREE from "three";
import { Canvas } from "react-three-fiber";

function PlanetsAroundSun() {
    return (
        <Canvas style={{ background: "/public/images/space.gif" }}>
            <Scene />
        </Canvas>
    );
}

function onMouseClick(event) {
    // Cast a ray from the camera through the mouse position
    raycaster.setFromCamera(mouse, camera);

    // Get the list of objects intersected by the ray
    const intersects = raycaster.intersectObjects(planetMeshes);

    // If at least one object is intersected, show its information
    if (intersects.length > 0) {
        const selectedPlanet = intersects[0].object;
        const infoDiv = document.getElementById("info");
        infoDiv.innerHTML = `<h2>${selectedPlanet.name}</h2><p>${selectedPlanet.info}</p>`;
    }
}

function Scene() {
    // Create a new texture loader
    const textureLoader = new THREE.TextureLoader();


    let scene, camera, renderer, raycaster, mouse;

    if (typeof window !== "undefined") {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Add the sun to the scene
        const sunGeometry = new THREE.SphereGeometry(110, 92, 92);
        const sunTexture = new THREE.TextureLoader().load("/images/earth.jpg");
        const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        // Add the planets to the scene
        const planets = [
            {
                name: "Keerthika",
                distance: 200,
                speed: 0.010,
                size: 70,
                image: "/images/kety.jpeg",
                info: "This is Mercury, the closest planet to the sun.",
            },
            {
                name: "Tanuja",
                distance: 200,
                speed: 0.010,
                size: 70,
                image: "/images/thanu.jpeg",
                info: "This is Venus, known for its thick atmosphere and volcanic activity.",
            },
            {
                name: "Prime",
                distance: 200,
                speed: 0.010,
                size: 70,
                image: "/images/prime.jpeg",
                info: "This is Earth, the third planet from the sun and our home planet.",
            },
            {
                name: "Reshma",
                distance: 200,
                speed: 0.010,
                size: 70,
                image: "/images/resh.jpeg",
                info: "This is Mars, known for its reddish appearance and past water activity.",
            },

        ];

        const planetMeshes = [];
        const planetParent = new THREE.Object3D(); // Create a parent object for the planets
        sun.add(planetParent); // Add the parent to the sun


        planets.forEach((planet, index) => {
            const geometry = new THREE.BoxGeometry(
                planet.size,
                planet.size,
                planet.size,
                planet.size
            );
            const texture = new THREE.TextureLoader().load(planet.image);
            const material = new THREE.MeshStandardMaterial({ map: texture });
            const planetMesh = new THREE.Mesh(geometry, material);
            planetMesh.name = planet.name; // Set the name of the mesh to the planet name

            const angle = index * Math.PI / 2; // Calculate the angle around the sun
            const x = planet.distance * Math.cos(angle); // Calculate the x-coordinate
            const z = planet.distance * Math.sin(angle); // Calculate the z-coordinate
            planetMesh.position.set(x, 0, z); // Set the position of the cube

            planetParent.add(planetMesh); // Add the planet to the parent object
            planetMeshes.push(planetMesh);
        });

        // Add lighting to the scene
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);

        // Add event listeners for mouse interaction
        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();

        function onMouseMove(event) {
            // Calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        function onMouseClick(event) {
            // Cast a ray from the camera through the mouse position
            raycaster.setFromCamera(mouse, camera);

            // Get the list of objects intersected by the ray
            const intersects = raycaster.intersectObjects(planetMeshes);

            // Load the GIF texture
            const gifTexture = textureLoader.load('/images/space.gif');

            // Create a plane geometry
            const planeGeometry = new THREE.PlaneGeometry(10, 10);

            // Create a material with the GIF texture
            const planeMaterial = new THREE.MeshBasicMaterial({ map: gifTexture });

            // Create a mesh with the plane geometry and material
            const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

            // Set the position of the plane mesh to be in the background
            planeMesh.position.set(0, 0, -10);

            // Add the plane mesh to the scene
            scene.add(planeMesh);

            // If at least one object is intersected, show its information
            if (intersects.length > 0) {
                const selectedPlanet = intersects[0].object;
                alert(selectedPlanet.name + ": " + selectedPlanet.info);
            }
        }
        // Move the camera to show the sun and planets
        camera.position.set(0, 0, 400);

        window.addEventListener("mousemove", onMouseMove, false);
        window.addEventListener("click", onMouseClick, false);


        // Animate the scene
        function animate() {
            requestAnimationFrame(animate);

            planetParent.rotation.y += 0.001; // Rotate the planet parent

            // Rotate each planet around the sun
            planets.forEach((planet, index) => {
                const planetMesh = planetMeshes[index];
                planetMesh.rotation.y += planet.speed;
            });

            renderer.render(scene, camera);
        }

        animate();

    }

    return null;
}

export default PlanetsAroundSun;
