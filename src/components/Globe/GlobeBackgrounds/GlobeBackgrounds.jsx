import { Float } from "@react-three/drei"
import { useMediaQuery } from "beautiful-react-hooks"
import React from "react"
import earthImage from "../../../images/circle-bg.png"
import ringImage from "../../../images/outer-ring-bg.png"
import Image from "../Helpers/Image"
export default function ImageBackground() {
  const isBig = useMediaQuery("(min-width: 1024px)")

  return (
    <>
      <Float rotationIntensity={0.3} floatIntensity={0.3}>
        <group>
          {isBig ? <Image scale={3} url={earthImage} /> : null}
          <Image scale={1.35} url={ringImage} position={[80, 10, 10]} />
        </group>
      </Float>
    </>
  )
}
