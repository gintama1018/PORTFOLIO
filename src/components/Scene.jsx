import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls, MeshDistortMaterial } from '@react-three/drei';

export default function Scene() {
  return (
    <>
      {/* Soft studio-like environment lighting */}
      <Environment preset="city" environmentIntensity={0.5} />
      
      {/* Ambient lighting for soft shadows */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight 
        position={[2, 5, 2]} 
        intensity={1} 
        castShadow 
        color="#ffffff" 
      />

      {/* Interactive presentation controls for smooth rotation */}
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Float
          speed={2} // Animation speed
          rotationIntensity={0.5} // XYZ rotation intensity
          floatIntensity={1} // Up/down float intensity
          floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within
        >
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            {/* Smooth abstract geometric shape (Icosahedron looks clean and modern) */}
            <icosahedronGeometry args={[1.5, 4]} />
            {/* Matte, clay-like material or soft abstract material */}
            <MeshDistortMaterial
              color="#ffffff"
              roughness={0.7}
              metalness={0.1}
              distort={0.4} // subtle distortion for organic abstract feel
              speed={1.5}
            />
          </mesh>
        </Float>
      </PresentationControls>

      {/* Gentle, smooth drop shadow */}
      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.3}
        scale={10}
        blur={2.5}
        far={4}
        color="#1d1d1f"
      />
    </>
  );
}
