import React, { Suspense, useRef, useEffect } from "react";
import './general.css'

// 3D Render
import { Canvas, useThree } from 'react-three-fiber';
import { House } from "./components/House/House";
import { OrbitControls, Sky } from "@react-three/drei";
import BgSound from "./components/Sound/BgSound";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";

// Audio



function App() {

  const cameraRef = useRef()

  // api ff xiv
  // useEffect(() => {
  //   fetch("https://xivapi.com/companion", { mode: 'cors' })
  //     .then(response => response.json())
  //     .then(data => console.info(data))
  // })
  
  


  
  return (
    <>
      <Nav />
      <Home />
      
      {/* <div style={{width: '100%', height: '80vh'} }>
        <Canvas camera={{ zoom: 1, position:[10, 10, 15] }} ref={cameraRef}>
          <ambientLight intensity={0.5}/>
          <pointLight position={[35, 35, 0]} intensity={0.4} />
          <pointLight position={[-35, 35, 0]} intensity={0.4} />
          <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
          <Suspense fallback={null}>
            <House />
          </Suspense>
          <OrbitControls makeDefault />
        </Canvas>
      </div> */}

    </>
  );
}

export default App;
