import { useHelper } from "@react-three/drei"
import React, { useRef } from "react"
import { DirectionalLightHelper } from "three"

export default function GlobeLights() {
  const ref = useRef()
  const ref2 = useRef()

  useHelper(ref, DirectionalLightHelper, 1)

  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        ref={ref}
        intensity={0.8}
        position={[8, 2, 2]}
        castShadow
      />

      <directionalLight
        ref={ref2}
        intensity={0.9}
        position={[6, 6, 4]}
        castShadow
      />
    </>
  )
}
