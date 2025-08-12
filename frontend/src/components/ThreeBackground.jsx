import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Extend Three.js objects for use in React Three Fiber
extend({ Points, PointMaterial });

function ParticleField({ count = 2000 }) {
  const mesh = useRef();
  
  // Generate random particle positions
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create a more spread out distribution
      positions[i * 3] = (Math.random() - 0.5) * 40; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
    }
    
    return positions;
  }, [count]);

  // Animate particles
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Gentle floating motion
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
    }
  });

  return (
    <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orbs = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ],
      color: i % 2 === 0 ? '#00f0ff' : '#ff00ff',
      size: Math.random() * 0.5 + 0.2
    }));
  }, []);

  return (
    <>
      {orbs.map((orb) => (
        <Float
          key={orb.id}
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={2}
          position={orb.position}
        >
          <mesh>
            <sphereGeometry args={[orb.size, 32, 32]} />
            <meshBasicMaterial
              color={orb.color}
              transparent
              opacity={0.3}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function Scene({ variant = 'full' }) {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      
      {/* Particle field */}
      <ParticleField count={variant === 'full' ? 2000 : 1000} />
      
      {/* Floating orbs */}
      {variant === 'full' && <FloatingOrbs />}
    </>
  );
}

const ThreeBackground = ({ variant = 'full', className = '' }) => {
  return (
    <div className={`particle-canvas ${className}`}>
      <Canvas
        camera={{ 
          position: [0, 0, 10], 
          fov: 60,
          near: 0.1,
          far: 200
        }}
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      >
        <Scene variant={variant} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;