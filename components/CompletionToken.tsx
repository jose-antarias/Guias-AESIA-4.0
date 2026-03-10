"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Token({ guideId }: { guideId: string }) {
    const meshRef = useRef<THREE.Group>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!hovered) {
            meshRef.current.rotation.y = t * 1;
            meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.2 : 1}
            >
                {/* Coin Body */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[2, 2, 0.3, 64]} />
                    <meshStandardMaterial
                        color="#fbbf24" // Amber/Gold
                        metalness={0.8}
                        roughness={0.2}
                        envMapIntensity={1.5}
                    />
                </mesh>

                {/* Embossed Ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.8, 0.1, 16, 64]} />
                    <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Text Front */}
                <Text
                    position={[0, 0, 0.16]}
                    fontSize={1.2}
                    font="/fonts/Outfit-Bold.ttf" // Fallback font if not loaded, R3F handles defaults
                    color="#92400e"
                    anchorX="center"
                    anchorY="middle"
                >
                    AESIA
                </Text>

                <Text
                    position={[0, -1, 0.16]}
                    fontSize={0.3}
                    color="#b45309"
                    anchorX="center"
                    anchorY="middle"
                >
                    CERTIFICADO
                </Text>

                {/* Text Back */}
                <Text
                    position={[0, 0, -0.16]}
                    rotation={[0, Math.PI, 0]}
                    fontSize={1.5}
                    color="#92400e"
                    anchorX="center"
                    anchorY="middle"
                >
                    {guideId}
                </Text>
            </group>
        </Float>
    );
}

export function CompletionToken({ guideId }: { guideId: string }) {
    return (
        <div className="w-full h-64 md:h-80 cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -5, -10]} color="blue" intensity={0.5} />
                <Token guideId={guideId} />
                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
            </Canvas>
        </div>
    );
}
