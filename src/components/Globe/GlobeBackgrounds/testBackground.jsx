import { Float } from "@react-three/drei"
import React from "react"
import ringImage from "../../../images/outer-ring-bg.png"
import Image from "../Helpers/Image"

export default function ImageBackground() {
  return (
    <Float rotationIntensity={0.3} floatIntensity={0.3}>
      <group>
        <Image scale={1.35} url={ringImage} />
      </group>
    </Float>
  )
}
