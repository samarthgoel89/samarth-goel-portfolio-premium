"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from 'three';

// Generates an interactive Neural Network grid look
function NeuralNodes() {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(4000 * 3), { radius: 3 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y += delta * 0.075;
      
      // Interactive Parallax
      state.camera.position.x += (state.pointer.x * 0.8 - state.camera.position.x) * 0.02;
      state.camera.position.y += (state.pointer.y * 0.8 - state.camera.position.y) * 0.02;
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00FFA3"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function DataCore() {
  const meshRef = useRef();
  const ringRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
      meshRef.current.scale.set(scale, scale, scale);
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.5;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + (Math.PI / 2);
    }
  });

  return (
    <group>
      {/* Wireframe Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial 
          color="#00FFA3" 
          wireframe 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>
      
      {/* Outer Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.5, 0.005, 16, 100]} />
        <meshBasicMaterial color="#7000FF" transparent opacity={0.4} />
      </mesh>
      
      {/* Inner Glowing Orb */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#00FFA3" transparent opacity={0.05} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
      {/* Radial Gradient overlay to blend with absolute black */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 0%, #0A0A0A 70%, #0A0A0A 100%)',
        zIndex: 1
      }} />
      
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }}>
        <fog attach="fog" args={["#0A0A0A", 2.5, 7]} />
        <ambientLight intensity={0.5} />
        <NeuralNodes />
        <DataCore />
      </Canvas>
    </div>
  );
}
