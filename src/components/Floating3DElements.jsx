import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, Sphere, Torus, Icosahedron, MeshDistortMaterial } from '@react-three/drei';

function FloatingShapes() {
  return (
    <>
      <Environment preset="city" environmentIntensity={0.2} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#48484a" />

      {/* Primary Abstract Shape - Foreground */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2} position={[3, 1, 2]}>
        <Icosahedron args={[1.5, 4]}>
          <MeshDistortMaterial 
             color="#1a1a1c" 
             roughness={0.7} 
             metalness={0.3}
             distort={0.4}
             speed={1.5}
             transparent
             opacity={0.8}
          />
        </Icosahedron>
      </Float>

      {/* Secondary Shape */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5} position={[-4, -2, 0]}>
        <Torus args={[1.2, 0.4, 32, 64]}>
          <meshStandardMaterial 
            color="#222225" 
            roughness={0.5} 
            metalness={0.5} 
            transparent
            opacity={0.7}
          />
        </Torus>
      </Float>

      {/* Tertiary Shape */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1} position={[0, 4, -5]}>
        <Sphere args={[2, 64, 64]}>
          <meshStandardMaterial 
            color="#111113" 
            roughness={0.9} 
            metalness={0.1} 
            transparent
            opacity={0.6}
          />
        </Sphere>
      </Float>
    </>
  );
}

export default function Floating3DElements() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50, /* Overneath content to float immersively */
        opacity: 0.9
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
