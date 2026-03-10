"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlassShape({ position, rotation, scale, speed = 1, geometry }: {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
    speed?: number;
    geometry: "box" | "octahedron" | "torus" | "icosahedron" | "dodecahedron";
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed;
        meshRef.current.rotation.x = rotation[0] + t * 0.15;
        meshRef.current.rotation.y = rotation[1] + t * 0.1;
        meshRef.current.rotation.z = rotation[2] + t * 0.05;
    });

    const geo = useMemo(() => {
        switch (geometry) {
            case "box": return <boxGeometry args={[1, 1, 1]} />;
            case "octahedron": return <octahedronGeometry args={[1, 0]} />;
            case "torus": return <torusGeometry args={[1, 0.4, 16, 32]} />;
            case "icosahedron": return <icosahedronGeometry args={[1, 0]} />;
            case "dodecahedron": return <dodecahedronGeometry args={[1, 0]} />;
        }
    }, [geometry]);

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                {geo}
                <meshStandardMaterial
                    color="#3b82f6"
                    metalness={0.1}
                    roughness={0.1}
                    transparent
                    opacity={0.35}
                    envMapIntensity={1}
                />
            </mesh>
        </Float>
    );
}

function Particles() {
    const points = useRef<THREE.Points>(null!);
    const count = 120;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 16;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
        return pos;
    }, []);

    useFrame((state) => {
        points.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#60a5fa" sizeAttenuation transparent opacity={0.6} />
        </points>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.4} color="#1e1b4b" />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#818cf8" />
            <directionalLight position={[-10, -10, -5]} intensity={1} color="#4f46e5" />
            <pointLight position={[0, 0, 2]} intensity={2} color="#6366f1" distance={5} />

            <GlassShape position={[-3.5, 1.5, -1]} rotation={[0.5, 0.3, 0]} scale={0.8} speed={0.5} geometry="octahedron" />
            <GlassShape position={[3.8, -0.5, -2]} rotation={[0.2, 0.8, 0.1]} scale={1.1} speed={0.3} geometry="dodecahedron" />
            <GlassShape position={[-1, -1.5, 0]} rotation={[0.1, 0.5, 0.3]} scale={0.6} speed={0.7} geometry="icosahedron" />
            <GlassShape position={[1.5, 2, -1.5]} rotation={[0.8, 0.1, 0.5]} scale={0.5} speed={0.4} geometry="torus" />
            <GlassShape position={[5, 1.5, -3]} rotation={[0.3, 0.6, 0.2]} scale={0.7} speed={0.6} geometry="box" />
            <GlassShape position={[-4.5, -1, -2]} rotation={[0.7, 0.2, 0.4]} scale={0.5} speed={0.8} geometry="octahedron" />

            <Particles />
        </>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: "transparent" }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
