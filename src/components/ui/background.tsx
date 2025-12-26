'use client'

import * as THREE from 'three'
import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import { vertex, fragment } from '@/lib/shaders'

function Particles({ count = 300 }: { count?: number }) {
  const { resolvedTheme } = useTheme()
  const meshRef = useRef<THREE.Points>(null!)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#ffe0fe') },
    }),
    []
  )

  useEffect(() => {
    const colorHex = resolvedTheme === 'dark' ? '#702c6d' : '#ffe0fe'
    uniforms.uColor.value.set(colorHex)
  }, [resolvedTheme, uniforms])

  const [positions, randoms] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const rnd = new Float32Array(count * 4)
    for (let i = 0; i < count; i++) {
      pos.set([Math.random(), Math.random(), Math.random()], i * 3)
      rnd.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      )
    }
    return [pos, rnd]
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (meshRef.current.material instanceof THREE.ShaderMaterial) {
      meshRef.current.material.uniforms.uTime.value = t * 0.25
    }

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      0.2,
      0.1
    )
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      0.2,
      0.1
    )

    meshRef.current.rotation.z += 0.001
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        {' '}
        {/* @ts-expect-error */}
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />{' '}
        {/* @ts-expect-error */}
        <bufferAttribute
          attach="attributes-random"
          count={randoms.length / 4}
          array={randoms}
          itemSize={4}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        transparent
        depthTest={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
      />
    </points>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 15 }}>
        <Particles count={300} />
      </Canvas>
    </div>
  )
}
